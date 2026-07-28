// === WHATSAPP ===
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const numero = '5541998204353'; // Coloque seu número
    window.open(`https://wa.me/${numero}`, '_blank');
});

document.getElementById('whatsappBtn2').addEventListener('click', function(e) {
    e.preventDefault();
    const numero = '5541998204353'; // Coloque seu número
    window.open(`https://wa.me/${numero}`, '_blank');
});

// === DOWNLOAD CV ===
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    gerarPDF();
});

// === FUNÇÃO PARA GERAR PDF ===
function gerarPDF() {
    const btn = document.getElementById('downloadBtn');
    const textoOriginal = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando...';
    btn.disabled = true;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = function() {
        const nome = 'Hugo Polidoro';
        const idade = '16 anos';
        const escola = 'Colégio Renne Carvalho de Amorim';
        const curso = 'Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas';
        
        const fotoPerfil = document.getElementById('fotoPerfil');
        const foto = fotoPerfil.src && !fotoPerfil.src.includes('sua-foto.jpg') ? fotoPerfil.src : '';
        
        const conteudo = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 40px; background: linear-gradient(135deg, #0f0c29, #1a1a3e); color: #e0e0e0; border-radius: 12px;">
                <div style="text-align: center; border-bottom: 2px solid rgba(99, 102, 241, 0.2); padding-bottom: 25px;">
                    ${foto ? `<img src="${foto}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #818cf8; margin-bottom: 15px;">` : ''}
                    <h1 style="background: linear-gradient(135deg, #818cf8, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.5rem; margin: 0;">${nome}</h1>
                    <p style="color: #a5b4fc; font-size: 1.1rem;">${curso}</p>
                </div>
                
                <div style="margin: 30px 0;">
                    <h2 style="color: #818cf8; border-left: 3px solid #818cf8; padding-left: 12px; font-size: 1.3rem;">Sobre Mim</h2>
                    <p style="color: #c4b5fd; line-height: 1.7;">Sou ${nome}, tenho ${idade} e estou cursando o ${curso} no ${escola}. Apaixonado por tecnologia, estou construindo minha base para me tornar um desenvolvedor criativo e inovador.</p>
                </div>
                
                <div style="margin: 30px 0;">
                    <h2 style="color: #818cf8; border-left: 3px solid #818cf8; padding-left: 12px; font-size: 1.3rem;">Conhecimentos</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; border-left: 2px solid #818cf8; color: #c4b5fd;">💻 Desenvolvimento Web (HTML, CSS, JavaScript)</li>
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; border-left: 2px solid #818cf8; color: #c4b5fd;">📊 Banco de Dados (SQL, Modelagem)</li>
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; border-left: 2px solid #818cf8; color: #c4b5fd;">📱 Design Responsivo</li>
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; border-left: 2px solid #818cf8; color: #c4b5fd;">🧠 Lógica de Programação (Java, Python)</li>
                    </ul>
                </div>
                
                <div style="margin: 30px 0;">
                    <h2 style="color: #818cf8; border-left: 3px solid #818cf8; padding-left: 12px; font-size: 1.3rem;">Projetos</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; color: #c4b5fd;"><strong style="color: #fff;">Portfólio Pessoal</strong> - Site desenvolvido com HTML, CSS e JavaScript</li>
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; color: #c4b5fd;"><strong style="color: #fff;">Sistema de Tarefas</strong> - Organizador em Java para treinar lógica</li>
                        <li style="padding: 10px 14px; background: rgba(255,255,255,0.03); margin: 6px 0; border-radius: 8px; color: #c4b5fd;"><strong style="color: #fff;">Landing Page</strong> - Página de apresentação para projeto escolar</li>
                    </ul>
                </div>
                
                <div style="margin: 30px 0; background: rgba(255,255,255,0.03); padding: 25px; border-radius: 12px; text-align: center; border: 1px solid rgba(99, 102, 241, 0.1);">
                    <p style="color: #c4b5fd;"><strong style="color: #fff;">📞 Contato:</strong> (11) 99999-9999</p>
                    <p style="color: #c4b5fd;"><strong style="color: #fff;">📧 E-mail:</strong> hugo.polidoro@email.com</p>
                    <p style="color: #c4b5fd;"><strong style="color: #fff;">📍 Localização:</strong> São Paulo, SP</p>
                </div>
                
                <div style="text-align: center; font-size: 0.8rem; color: #6b7280; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                    <p>Curriculum Vitae - ${nome} &bull; ${new Date().getFullYear()}</p>
                </div>
            </div>
        `;

        const element = document.createElement('div');
        element.innerHTML = conteudo;
        document.body.appendChild(element);

        const opt = {
            margin: 10,
            filename: `Curriculo_Hugo_Polidoro.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0f0c29' },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save().then(function() {
            document.body.removeChild(element);
            btn.innerHTML = textoOriginal;
            btn.disabled = false;
        });
    };
    document.head.appendChild(script);
}