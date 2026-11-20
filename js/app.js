function showTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    if (btn) btn.classList.add('active');
    if (tabId === 'pronostico') renderPronostico();
}

function renderInventario(filtro = '') {
    const tbody = document.getElementById('inventory-body');
    tbody.innerHTML = '';
    const lista = inventario.filter(p => 
        p.nombre.toLowerCase().includes(filtro.toLowerCase()) || 
        p.codigo.toLowerCase().includes(filtro.toLowerCase())
    );
    lista.forEach(prod => {
        const tr = document.createElement('tr');
        const estadoClass = prod.stock <= prod.minimo ? 'text-warning' : 'text-success';
        tr.innerHTML = `<td>${prod.codigo}</td><td>${prod.nombre}</td><td>${prod.categoria}</td><td>${prod.stock}</td><td>${prod.minimo}</td><td>S/ ${prod.precio.toFixed(2)}</td><td class="${estadoClass}">${prod.estado}</td>`;
        tbody.appendChild(tr);
    });
    actualizarStats();
}

function filtrarInventario() {
    renderInventario(document.getElementById('search-input').value);
}

function actualizarStats() {
    document.getElementById('stat-total').textContent = inventario.length;
    document.getElementById('stat-alertas').textContent = inventario.filter(p => p.stock <= p.minimo).length;
    document.getElementById('stat-valor').textContent = `S/ ${inventario.reduce((acc, p) => acc + (p.stock * p.precio), 0).toFixed(2)}`;
}

function actualizarSelectVenta() {
    const select = document.getElementById('venta-producto');
    if (!select) return;
    select.innerHTML = '';
    inventario.forEach(prod => {
        const option = document.createElement('option');
        option.value = prod.codigo;
        option.textContent = `${prod.nombre} (Stock: ${prod.stock})`;
        select.appendChild(option);
    });
}

function registrarVenta() {
    const select = document.getElementById('venta-producto');
    const cant = parseInt(document.getElementById('venta-cantidad').value);
    const prod = inventario.find(p => p.codigo === select.value);
    const msg = document.getElementById('venta-mensaje');
    
    if (cant > prod.stock) {
        msg.textContent = `Venta bloqueada: solo quedan ${prod.stock} u.`;
        msg.style.color = 'var(--warning-red)';
        return;
    }
    prod.stock -= cant;
    if (prod.stock <= prod.minimo) prod.estado = 'Reponer';
    msg.textContent = `Venta exitosa. Stock actualizado: ${prod.stock} u.`;
    msg.style.color = 'var(--success-green)';
    renderInventario();
    actualizarSelectVenta();
}

function renderPronostico() {
    const tbody = document.getElementById('pronostico-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    pronosticos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.nombre}</td><td>${p.demanda} u.</td><td>${p.stock} u.</td><td>${p.rop.toFixed(1)}</td><td>${p.compra} u.</td><td class="${p.estado === 'Reponer' ? 'text-warning' : 'text-success'}">${p.estado}</td>`;
        tbody.appendChild(tr);
    });
}

function agregarMensaje(texto, tipo) {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.className = `message-bubble ${tipo}`;
    div.innerHTML = `<p>${texto}</p>`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function enviarMensaje() {
    const input = document.getElementById('chat-message');
    const texto = input.value.trim();
    if (!texto) return;
    agregarMensaje(texto, 'received');
    input.value = '';
    
    setTimeout(() => {
        let t = texto.toLowerCase();
        let prod = inventario.find(p => t.includes(p.nombre.toLowerCase().split(' ')[0]));
        if (t.includes('color')) prod = inventario.find(p => p.codigo === 'PL-003');
        if (t.includes('papel')) prod = inventario.find(p => p.codigo === 'PL-006');
        
        const respuesta = prod 
            ? `Tenemos ${prod.stock} u. en "${prod.nombre}". Precio: S/ ${prod.precio.toFixed(2)} c/u.` 
            : 'No reconozco ese producto. Te derivo con un colaborador. 🙋';
        agregarMensaje(respuesta, 'sent');
    }, 700);
}

function reiniciarDemo() {
    inicializarDatos();
    renderInventario();
    actualizarSelectVenta();
    renderPronostico();
    document.getElementById('venta-mensaje').textContent = '';
    document.getElementById('search-input').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarDatos();
    renderInventario();
    actualizarSelectVenta();
});