document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Category filter
    const filterButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Show/hide products based on filter
            productCards.forEach(card => {
                const category = card.parentElement.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    });

    // Product data
    const products = {
        'cobre-esmaltado': {
            title: 'Fio de Cobre Esmaltado',
            img: 'https://media.istockphoto.com/id/96792927/pt/foto/envernizados-fio-de-cobre.jpg?s=1024x1024&w=is&k=20&c=4C_iQ5dePRIAG8g40DhTIf7-s5nsICWeeoDRoHnJvTo=',
            desc: 'Fio de cobre esmaltado de alta qualidade para aplicações em motores, transformadores e equipamentos eletrônicos.',
            features: [
                'Alta condutividade elétrica',
                'Isolação esmaltada de alta resistência',
                'Diversos calibres disponíveis',
                'Resistência térmica superior (até 180°C)',
                'Excelente aderência e flexibilidade'
            ],
            gauge: '0.20 - 4.00 mm²',
            temp: '180°C',
            resistance: '0.01724 Ω/mm²/m',
            material: 'Cobre Eletrolítico',
            qualidade: [
                'Isolação testada em bancada própria com rigidez dielétrica',
                'Controle dimensional durante processo produtivo',
                'Teste de soldabilidade em 100% dos lotes produzidos',
                'Certificação de qualidade para cada lote produzido'
            ],
            applications: [
                'Motores elétricos',
                'Transformadores',
                'Bobinas',
                'Eletroímãs',
                'Equipamentos eletrônicos'
            ]
        },
        'aluminio': {
            title: 'Fio de Alumínio',
            img: 'https://media.istockphoto.com/id/1270947935/pt/foto/cable-manufacturing-machine-in-steel-industry.jpg?s=1024x1024&w=is&k=20&c=FAOSFbn23AyVRTkA6ZMSnAlpT4RsmZ3z8TKpv2B97f4=',
            desc: 'Fio de alumínio de alta condutividade para aplicações em transmissão e distribuição de energia.',
            features: [
                'Excelente custo-benefício',
                'Leve e resistente',
                'Alta condutividade elétrica',
                'Resistência à corrosão',
                'Longa vida útil'
            ],
            gauge: '1.50 - 35.00 mm²',
            temp: '90°C',
            resistance: '0.02826 Ω/mm²/m',
            material: 'Alumínio 1350',
            qualidade: [
                'Análise química do material de entrada',
                'Controle dimensional rigoroso',
                'Testes de condutividade elétrica',
                'Certificado de garantia para cada entrega'
            ],
            applications: [
                'Linhas de transmissão',
                'Redes de distribuição',
                'Cabos aéreos',
                'Instalações industriais',
                'Emendas e conexões'
            ]
        },
        'cabos-especiais': {
            title: 'Cabos Especiais',
            img: 'https://images.unsplash.com/photo-1678119895596-411628b1f6be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            desc: 'Cabos especiais desenvolvidos sob medida para aplicações específicas com requisitos técnicos diferenciados.',
            features: [
                'Desenvolvimento personalizado',
                'Resistência a intempéries',
                'Alta flexibilidade',
                'Proteção contra interferências',
                'Múltiplas camadas de isolamento'
            ],
            gauge: 'Sob consulta',
            temp: 'Varía conforme aplicação',
            resistance: 'Varía conforme aplicação',
            material: 'Personalizado',
            qualidade: [
                'Desenvolvimento sob encomenda conforme especificação do cliente',
                'Testes específicos conforme aplicação final',
                'Certificação de conformidade para aplicações especiais'
            ],
            applications: [
                'Aplicações industriais específicas',
                'Ambientes corrosivos',
                'Alta temperatura',
                'Aplicações submarinas',
                'Setor aeronáutico e automotivo'
            ]
        },
        'cobre-nu': {
            title: 'Fio de Cobre Nu',
            img: 'https://images.unsplash.com/photo-1605108721178-97a9514d16e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            desc: 'Fio de cobre nu de alta pureza para aplicações onde a máxima condutividade é necessária.',
            features: [
                'Condutividade máxima',
                'Alta pureza (99,9%)',
                'Sem revestimento',
                'Excelente ductibilidade',
                'Aplicações industriais'
            ],
            gauge: '0.50 - 50.00 mm²',
            temp: '90°C',
            resistance: '0.01724 Ω/mm²/m',
            material: 'Cobre Eletrolítico',
            qualidade: [
                'Testes em laboratório próprio (Dimensional, Dureza, Ângulo de Recuo, Resistividade/Condutividade)',
                'Processo produtivo controlado com total rastreabilidade do produto',
                'Produtos fornecidos com respectivo certificado de qualidade'
            ],
            applications: [
                'Aterramentos',
                'Para-raios',
                'Interligações elétricas',
                'Industria automotiva',
                'Instalações de alta corrente',
                'barramentos máquinas de solda',
                'eletroimãs'
            ]
        },
        'multipolar': {
            title: 'Cabo Multipolar',
            img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            desc: 'Cabos multipolares com múltiplos condutores para instalações elétricas complexas.',
            features: [
                'Múltiplos condutores',
                'Isolação PVC',
                'Alta flexibilidade',
                'Instalação facilitada',
                'Capa protetora externa'
            ],
            gauge: '1.50 - 240.00 mm²',
            temp: '70°C',
            resistance: '0.01724 Ω/mm²/m',
            material: 'Cobre Eletrolítico',
            qualidade: [
                'Testes de continuidade em 100% dos condutores',
                'Verificação de espessura de isolação',
                'Ensaio de flexibilidade e resistência mecânica',
                'Certificado de conformidade com normas técnicas'
            ],
            applications: [
                'Instalações prediais',
                'Sistemas industriais',
                'Machines e equipamentos',
                'Sistemas de automação',
                'Painéis elétricos'
            ]
        },
        'aluminio-revestido': {
            title: 'Fio de Alumínio Revestido',
            img: 'https://images.unsplash.com/photo-1601876816093-6052297033ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            desc: 'Fio de alumínio com revestimento protetor para aplicações externas e ambientes corrosivos.',
            features: [
                'Revestimento protetor',
                'Resistência à corrosão',
                'Proteção UV',
                'Aplicações externas',
                'Longa vida útil'
            ],
            gauge: '2.50 - 50.00 mm²',
            temp: '90°C',
            resistance: '0.02826 Ω/mm²/m',
            material: 'Alumínio 1350',
            qualidade: [
                'Testes de resistência à corrosão acelerada',
                'Controle de espessura do revestimento',
                'Verificação de aderência do revestimento',
                'Ensaio de envelhecimento acelerado'
            ],
            applications: [
                'Linhas aéreas externas',
                'Ambientes marinhos',
                'Indústria química',
                'Infraestrutura urbana',
                'Redes de distribuição'
            ]
        }
    };

    // Modal functionality
    const productModal = document.getElementById('productModal');
    productModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const productId = button.getAttribute('data-product');
        const product = products[productId];
        
        // Update modal content
        document.getElementById('modalProductTitle').textContent = product.title;
        document.getElementById('modalProductImg').src = product.img;
        document.getElementById('modalProductImg').alt = product.title;
        document.getElementById('modalProductDesc').textContent = product.desc;
        
        // Update features
        const featuresList = document.getElementById('modalProductFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'mb-2';
            li.innerHTML = `<i class="bi bi-check-circle-fill text-primary me-2"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        // Update specs
        document.getElementById('modalProductGauge').textContent = product.gauge;
        document.getElementById('modalProductTemp').textContent = product.temp;
        document.getElementById('modalProductResistance').textContent = product.resistance;
        document.getElementById('modalProductMaterial').textContent = product.material;
        
        // Update qualidade (se existir)
        const qualidadeList = document.getElementById('modalProductQualidade');
        qualidadeList.innerHTML = '';
        
        if (product.qualidade && product.qualidade.length > 0) {
            // Mostrar a seção de qualidade
            document.querySelector('.qualidade-section').style.display = 'block';
            
            product.qualidade.forEach(item => {
                const li = document.createElement('li');
                li.className = 'mb-2';
                li.innerHTML = `<i class="bi bi-award-fill text-primary me-2"></i> ${item}`;
                qualidadeList.appendChild(li);
            });
        } else {
            // Esconder a seção de qualidade se não houver dados
            document.querySelector('.qualidade-section').style.display = 'none';
        }
        
        // Update applications
        const applicationsList = document.getElementById('modalProductApplications');
        applicationsList.innerHTML = '';
        product.applications.forEach(application => {
            const li = document.createElement('li');
            li.className = 'mb-2';
            li.innerHTML = `<i class="bi bi-arrow-right-circle text-primary me-2"></i> ${application}`;
            applicationsList.appendChild(li);
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});