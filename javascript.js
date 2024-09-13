let main = document.querySelector('main')
let cabecalho = document.querySelector('.container')
let menu = document.querySelectorAll('.menu-opcoes')
let digitar = document.querySelector('.digitar')
let botao = document.querySelector('.botao')
let container = document.querySelector('.img-container')
let linguagens = document.querySelector('.linguagens')
let breno = document.querySelector('.breno')
let aparecer = document.querySelector('.aparecer')
let aparecer2 = document.querySelector('.aparecer2')
let tituloroxo = document.querySelectorAll('.tituloroxo')

let idioma = document.querySelector('.idioma')

function mudarmodo(){
    main.classList.toggle('dark')
    container.classList.toggle('dark')
    linguagens.classList.toggle('dark')
    cabecalho.classList.toggle('escuro')
    digitar.classList.toggle('mudar')
    botao.classList.toggle('botaodark')
    breno.classList.toggle('escuro')
    aparecer.classList.toggle('titulo-dark')
    aparecer2.classList.toggle('titulo-dark')
    

    menu.forEach(function(item) {
        item.classList.toggle('escuro')
    })

    tituloroxo.forEach(function(item) {
        item.classList.toggle('titulo-dark')
    })
}

function mudaridioma(){
    idioma.classList.toggle('en')

    //Cabeçalho
    let inicio = document.querySelector('.inicio-en')
    let sobre = document.querySelector('.sobre-en')
    let habilidade = document.querySelector('.habilidade-en')
    let contato = document.querySelector('.contato-en')
    
    
    //Inicio
    let ola = document.querySelector('.ola')
    let nome = document.querySelector('.nome')
    let nome2 = document.querySelector('.escondido')
    let desenvolvedor = document.querySelector('.desenvolvedor')
    
    //Sobre mim
    let sobre2 = document.querySelector('.sobre2-en')
    let p1s = document.querySelector('.paragrafo1-sobre')
    let p2s = document.querySelector('.paragrafo2-sobre')
    
    //Portfólio
    let calculadora = document.querySelector('.calculadora')
    let p1c = document.querySelector('.paragrafo1-calc')
    let p2c = document.querySelector('.paragrafo2-calc')
    

    let nike = document.querySelector('.site-nike')
    let p1n = document.querySelector('.paragrafo1-nike')
    let p2n = document.querySelector('.paragrafo2-nike')
    
    let android = document.querySelector('.android')
    let p1a = document.querySelector('.paragrafo1-android')
    let p2a = document.querySelector('.paragrafo2-android')

    let news = document.querySelector('.site-news')
    let p1t = document.querySelector('.paragrafo1-news')
    let p2t = document.querySelector('.paragrafo2-news')
    let p3t = document.querySelector('.paragrafo3-news')

    let button = document.querySelectorAll('.button')
    
    //Habilidades
    let skills = document.querySelector('.skills')
    let t1 = document.querySelector('.t1')
    let t2 = document.querySelector('.t2')
    let t3 = document.querySelector('.t3')
    let t4 = document.querySelector('.t4')

    let p1d = document.querySelector('.paragrafo1-desenvolvimento')
    let p2d = document.querySelector('.paragrafo2-desenvolvimento')
    let p3d = document.querySelector('.paragrafo3-desenvolvimento')
    let p4d = document.querySelector('.paragrafo4-desenvolvimento')
    
    let p1l = document.querySelector('.paragrafo1-linguagens')
    let p2l = document.querySelector('.paragrafo2-linguagens')
    let p3l = document.querySelector('.paragrafo3-linguagens')
    let p4l = document.querySelector('.paragrafo4-linguagens')
    let p5l = document.querySelector('.paragrafo5-linguagens')
    
    //Contato
    let contact = document.querySelector('.contato-in')


    if (ola.innerText === 'Olá!'){ // Se estiver em portugês, mudar para o inglês 
        //Cabeçalho
        inicio.innerText = inicio.innerText.replace('Início', 'Start')
        sobre.innerText = sobre.innerText.replace('Sobre mim', 'About me')
        habilidade.innerText = habilidade.innerText.replace('Habilidades', 'Skills')
        contato.innerText = contato.innerText.replace('Contato', 'Contact')

        //Início
        ola.innerText = ola.innerText.replace('Olá!', 'Hello!')
        nome.innerText = nome.innerText.replace('Eu sou o', "My name's")
        nome2.innerText = nome2.innerText.replace('Eu sou o', "My name's")
        desenvolvedor.innerText = desenvolvedor.innerText.replace('Desenvolvedor', 'Developer')
        
        //Sobre mim
        sobre2.textContent = "About me"
        p1s.textContent = "I'm a front-end developer, interested in creating innovative solutions to improve people's lives. I am currently studying Software Engineering (Anhanguera) and Cs50 Introduction to Computer Science (Free course from Harvard). I intend, through my knowledge of technology, to help people's lives. My main focus is on web development, but I am willing to learn and work in other areas and technologies if necessary. I am focused on what I need to deliver, while at the same time seeking to provide the best possible experience for the user."
        p2s.textContent = "In my projects, I use the technologies I am most proficient with: JavaScript, HTML and CSS."
        
        //Portfólio
        nike.textContent = "Nike Website"
        p1n.textContent = "The project I developed for my portfolio is a reinterpretation of the Nike website, adapted and personalized to reflect my own vision and skills."
        p2n.textContent = "Using HTML, CSS and JavaScript, I created a dynamic and interactive environment, incorporating elements such as a carousel to highlight products and content. Rather than simple imitation, I focused on capturing the essence of the Nike brand while adding my own creativity and unique style."
        
        news.textContent = "The News Website"
        p1t.textContent = "My project consists of an entry site for The News, an initial platform for users before they are directed to another site. This approach delivers a dynamic and informative sign-in experience."
        p2t.textContent = "Made using HTML, CSS and JavaScript, this project not only offers a functional interface, but also provides a remarkable experience that will leave a lasting first impression on visitors who access it."
        p3t.textContent = "Combining technology and creativity!"

        calculadora.textContent = "Calculator"
        p1c.textContent = "My interactive calculator is a unique creation developed exclusively for my portfolio. Entirely designed in HTML, CSS and JavaScript, this calculator offers an intuitive user experience, where you can perform calculations with just a few clicks."
        p2c.textContent = "With a unique design, this calculator combines functionality and aesthetics, demonstrating my ability to create interactive and attractive interfaces."
        

        android.textContent = "Android Project"
        p1a.textContent = "My Android project is a journey through the evolution of the operating system's iconic mascot. Developed as part of my portfolio, this project combines HTML, CSS and JavaScript to present the evolution of the mascot!"
        p2a.textContent = "Additionally, it includes a YouTube video player that dynamically displays this evolution, offering a complete visual experience. With an icon in the corner of the screen, users can be directed to the official Android website for more information."
        
        button.forEach(function(button) {
            button.textContent = "Access website"
            
        })
        
        //Habilidades
        skills.textContent = "Skills"
        t1.textContent = "Technologies used for web development:"
        t2.textContent = "Programming languages with basic knowledge:"
        t3.textContent = "Web development:"
        t4.textContent = "Programming languages:"
        
        p1d.textContent = "Web development is the area in which I have the most knowledge and experience. Throughout my professional journey, I have focused my efforts on honing my skills and exploring the diverse aspects of this dynamic field."
        p2d.textContent = "Using a skillful combination of <b>Html, CSS and JavaScript</b>, I am able to create a wide variety of web projects, from simple landing pages to more complex interactive platforms. Regardless of the client's needs - whether it is to establish a striking online presence, provide information through a news portal, or even develop an online game - I am prepared to face challenges with creativity and technical expertise."
        p3d.textContent = "However, more than simply producing a final product, I prioritize the user experience at each stage of the development process. I recognize that the quality and usability of a website play a fundamental role in retaining visitors and, therefore, in the success of the project as a whole."
        p4d.textContent = "Therefore, when entering web development, I commit to not only creating visually appealing interfaces, but also ensuring that each interaction is intuitive and rewarding for the end user. This user-centric approach not only sets my projects apart but also makes them memorable and impactful."

        p1l.textContent = "In the vast field of programming languages, I am familiar with Python and C++, having explored their basic functionalities and carried out projects, including the development of APIs."
        p2l.textContent = "In Python, I have appreciated its intuitive syntax and its ability to simplify complex tasks. Although my domain is basic, I was able to apply it to small projects, taking advantage of its data structures and operators to solve simple problems efficiently."
        p3l.textContent = "In turn, with C++, I delved into a more robust world, exploring its potential for developing higher-performance applications and low-level systems. Even though my knowledge is fundamental, I have worked on projects that have allowed me to understand the principles of memory management and the importance of code optimization."
        p4l.textContent = "Although I am still building my skill base in these languages, I am committed to continuing to learn and expand my knowledge. I recognize the importance of adapting my approach as my proficiency increases, always seeking to apply programming best practices to my future projects."
        p5l.textContent = "So, as I continue to explore the different aspects of these programming languages, I look forward to expanding my mastery to include other technologies and languages, opening up new possibilities in my journey as a programmer."

        contact.textContent = "Contact"
    }
    else{ // Se não mudar para o portugês
        //Cabeçalho
        inicio.innerText = inicio.innerText.replace('Start', 'Início')
        sobre.innerText = sobre.innerText.replace('About me', 'Sobre mim')
        habilidade.innerText = habilidade.innerText.replace('Skills', 'Habilidades')
        contato.innerText = contato.innerText.replace('Contact', 'Contato')
        
        //Inicio
        ola.innerText = ola.innerText.replace('Hello!', 'Olá!')
        nome.innerText = nome.innerText.replace("My name's", 'Eu sou o')
        nome2.innerText = nome2.innerText.replace("My name's", 'Eu sou o')
        desenvolvedor.innerText = desenvolvedor.innerText.replace('Developer', 'Desenvolvedor')
        
        //Sobre mim
        sobre2.textContent = 'Sobre mim'
        p1s.textContent = "Sou desenvolvedor front-end, interessado em criar soluções inovadoras para melhorar a vida da pessoas. Atualmente, estou cursando Engenharia de Software (Anhanguera) e Cs50 Introdução à Ciência da Computação (Curso gratuito de Harvard). Pretendo, através dos meus conhecimentos na tecnologia ajudar a vida das pessoas. Meu foco principal está voltado para o desenvolvimento web, mas estou disposto a aprender e trabalhar em outras áreas e tecnologias, se necessário. Sou focado naquilo que eu preciso entregar, ao mesmo tempo em que busco proporcionar a melhor experiência possível para o usuário."
        p2s.textContent = "Nos meus projetos, utilizo as tecnologias das quais tenho mais domínio: JavaScript, HTML e CSS."
        
        //Portfólio
        nike.textContent = "Site da Nike"
        p1n.textContent = "O projeto que desenvolvi para o meu portfólio é uma reinterpretação do site da Nike, adaptado e personalizado para refletir minha própria visão e habilidades."
        p2n.textContent = "Utilizando HTML, CSS e JavaScript, criei um ambiente dinâmico e interativo, incorporando elementos como um carrossel para destacar produtos e conteúdo. Ao invés de uma simples imitação, foquei em capturar a essência da marca Nike enquanto adicionava minha própria criatividade e estilo único."
        
        news.textContent = "Site The News"
        p1t.textContent = "Meu projeto consiste em um site de entrada para The News, uma plataforma inicial para os usuários antes de serem direcionados para outro site. Essa abordagem oferece uma experiência de entrada dinâmica e informativa."
        p2t.textContent = "Feito utilizando HTML, CSS e JavaScript, este projeto não apenas oferece uma interface funcional, mas também proporciona uma experiência marcante que deixará uma primeira impressão duradoura nos visitantes."
        p3t.textContent = "Combinando tecnologia e criatividade!"
        
        calculadora.textContent = "Calculadora"
        p1c.textContent = "Minha calculadora interativa é uma criação única desenvolvida exclusivamente para o meu portfólio. Totalmente concebida em HTML, CSS e JavaScript, esta calculadora oferece uma experiência de usuário intuitiva, onde você pode realizar cálculos apenas com cliques."
        p2c.textContent = "Com um design singular, esta calculadora combina funcionalidade e estética, demonstrando minha habilidade em criar interfaces interativas e atraentes."
        
        
        android.textContent = "Projeto Android"
        p1a.textContent = "Meu projeto Android é uma jornada pela evolução do icônico mascote do sistema operacional. Desenvolvido como parte do meu portfólio, este projeto combina HTML, CSS e JavaScript apresentar a evolução do mascote!"
        p2a.textContent = "Além disso, inclui um player de vídeo do YouTube que exibe essa evolução de forma dinâmica, oferecendo uma experiência visual completa. Com um ícone no canto da tela, os usuários podem ser direcionados para o site oficial do Android para obter mais informações."
        
        button.forEach(function(button) {
            button.textContent = "Acessar Site"
            
        })
        
        //Habilidades
        skills.textContent = "Habilidades"
        t1.textContent = "Tecnologias usadas para desenvolvimento web:"
        t2.textContent = "Linguagens de programação com conhecimento básico:"
        t3.textContent = "Desenvolvimento Web:"
        t4.textContent = "Linguagens de Programação:"
        
        p1d.textContent = "O desenvolvimento web é a área na qual possuo mais conhecimento e experiência. Ao longo da minha jornada profissional, concentrei meus esforços em aprimorar minhas habilidades e explorar os diversos aspectos desse campo dinâmico."
        p2d.textContent = "Utilizando uma combinação habilidosa de Html, Css e JavaScript, sou capaz de criar uma ampla variedade de projetos web, desde páginas de destino simples até plataformas interativas mais complexas. Independentemente das necessidades do cliente - seja para estabelecer uma presença online marcante, fornecer informações através de um portal de notícias, ou até mesmo desenvolver um jogo online - estou preparado para enfrentar os desafios com criatividade e expertise técnica."
        p3d.textContent = "Contudo, mais do que simplesmente produzir um produto final, priorizo a experiência do usuário em cada etapa do processo de desenvolvimento. Reconheço que a qualidade e a usabilidade de um site desempenham um papel fundamental na retenção dos visitantes e, por conseguinte, no sucesso do projeto como um todo."
        p4d.textContent = "Portanto, ao ingressar no desenvolvimento web, comprometo-me não apenas a criar interfaces visualmente atraentes, mas também a garantir que cada interação seja intuitiva e gratificante para o usuário final. Essa abordagem centrada no usuário não apenas diferencia meus projetos, mas também os torna memoráveis e impactantes."
        
        p1l.textContent = "No vasto campo das linguagens de programação, tenho familiaridade com Python e C++, tendo explorado suas funcionalidades básicas e realizado projetos, incluindo o desenvolvimento de APIs."
        p2l.textContent = "Em Python, tenho apreciado sua sintaxe intuitiva e sua capacidade de simplificar tarefas complexas. Embora meu domínio seja básico, consegui aplicá-lo em projetos pequenos, aproveitando suas estruturas de dados e operadores para resolver problemas simples de forma eficiente."
        p3l.textContent = "Por sua vez, com o C++, mergulhei em um mundo mais robusto, explorando seu potencial para o desenvolvimento de aplicativos de maior desempenho e sistemas de baixo nível. Mesmo que meu conhecimento seja fundamental, tenho trabalhado em projetos que me permitiram entender os princípios de gerenciamento de memória e a importância da otimização de código."
        p4l.textContent = "Embora ainda esteja construindo minha base de habilidades nessas linguagens, estou comprometido em continuar aprendendo e expandindo meu conhecimento. Reconheço a importância de adaptar minha abordagem conforme minha proficiência aumenta, procurando sempre aplicar as melhores práticas de programação em meus projetos futuros."
        p5l.textContent = "Assim, enquanto continuo explorando os diferentes aspectos dessas linguagens de programação, estou ansioso para expandir meu domínio para incluir outras tecnologias e linguagens, abrindo novas possibilidades em minha jornada como programador."
        
        contact.textContent = "Contato"
    }
}

let start = document.getElementById('inicio')
let startpage = document.getElementById('inicio-page')

start.addEventListener('click', function(){
    startpage.scrollIntoView({behavior: 'smooth'})
})

let about = document.getElementById('sobre')
let aboutpage = document.getElementById('aboutpage')

about.addEventListener('click', function(){
    aboutpage.scrollIntoView({behavior: 'smooth'})
})



let portfolio = document.getElementById('portfolio')
let portfoliopage = document.getElementById('portfoliopage')

portfolio.addEventListener('click', function(){
    portfoliopage.scrollIntoView({behavior: 'smooth'})
})

let hab = document.getElementById('habilidade')
let habpage = document.getElementById('habilidadepage')

hab.addEventListener('click', function(){
    habpage.scrollIntoView({behavior: 'smooth'})
})

let cont = document.getElementById('contato')
let contpage = document.getElementById('contatopage')

cont.addEventListener('click', function(){
    contpage.scrollIntoView({behavior: 'smooth'})
})

let seta1 = document.querySelector('.seta1')

seta1.addEventListener('click', function(){
    aboutpage.scrollIntoView({behavior: 'smooth'})
})

let seta2 = document.querySelector('.seta2')

seta2.addEventListener('click', function(){
    startpage.scrollIntoView({behavior: 'smooth'})
})

