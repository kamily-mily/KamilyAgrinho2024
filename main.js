function mostrarInfo(tipo) {
    const infoCampo = document.getElementById('info-campo');
    const infoCidade = document.getElementById('info-cidade');
    
    if (tipo === 'campo') {
        infoCampo.innerHTML = `
            <h3>Mais sobre o Campo</h3>
            <p>O campo oferece uma vida tranquila com menos poluição e mais espaço para atividades ao ar livre. Os moradores geralmente têm um forte vínculo com a natureza e uma comunidade mais unida.</p>
        `;
        infoCidade.innerHTML = '';
    } else if (tipo === 'cidade') {
        infoCidade.innerHTML = `
            <h3>Mais sobre a Cidade</h3>
            <p>A cidade é um centro de oportunidades, com acesso a escolas, hospitais e atividades culturais. O ritmo de vida é rápido e a diversidade de pessoas e serviços é muito maior.</p>
        `;
        infoCampo.innerHTML = '';
    }
}