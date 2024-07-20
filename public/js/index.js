async function consultarTempo() {
    const cidade = document.getElementById('cidade').value.trim();

    if (cidade === '') {
        alert('Por favor, digite o nome da cidade.');
        return;
    }

    try {
        const response = await fetch(`/weather?city=${cidade}`);
        const data = await response.json();

        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = `Previsão do tempo em ${data.location.name}, ${data.location.country}`;

        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <p>Temperatura atual: ${data.current.temperature}°C</p>
            <p>Condição: ${data.current.weather_descriptions[0]}</p>
            <p>Última atualização: ${data.current.observation_time}</p>
        `;

        abrirModal();
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
        alert('Erro ao buscar dados do clima.');
    }
}

function abrirModal() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');
}

function fecharModal() {
    const modal = document.getElementById('janela-modal');
    modal.classList.remove('abrir');
}