
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');

        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Category Tabs
        const categoryTabs = document.querySelectorAll('.category-tab');
        const productsGrids = document.querySelectorAll('.products-grid');

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all products grids
                productsGrids.forEach(grid => grid.classList.remove('active'));
                
                // Show selected products grid
                const category = tab.getAttribute('data-category');
                if (category === 'all') {
                    document.getElementById('all-products').classList.add('active');
                } else {
                    document.getElementById(`${category}-products`).classList.add('active');
                }
            });
        });

        // Countdown Timer
        function updateCountdown() {
            const now = new Date();
            const endOfWeek = new Date();
            
            // Set to end of current week (Saturday 23:59:59)
            endOfWeek.setDate(now.getDate() + (6 - now.getDay()));
            endOfWeek.setHours(23, 59, 59, 0);
            
            const diff = endOfWeek - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Brick Animation
        const brickAnimation = document.getElementById('brick-animation');
        function createBrick() {
            const brick = document.createElement('div');
            brick.classList.add('brick');
            brick.style.left = `${Math.random() * 100}%`;
            brick.style.animationDuration = `${5 + Math.random() * 10}s`;
            brick.style.animationDelay = `${Math.random() * 5}s`;
            brickAnimation.appendChild(brick);
            
            // Remove brick after animation completes
            setTimeout(() => {
                brick.remove();
            }, 15000);
        }

        // Tile Animation
        const tileAnimation = document.getElementById('tile-animation');
        function createTile() {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.top = `${10 + Math.random() * 80}%`;
            tile.style.animationDuration = `${10 + Math.random() * 20}s`;
            tile.style.animationDelay = `${Math.random() * 10}s`;
            tileAnimation.appendChild(tile);
            
            // Remove tile after animation completes
            setTimeout(() => {
                tile.remove();
            }, 30000);
        }


        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
            });
        }

        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                alert(`Obrigado por assinar nossa newsletter! Um email de confirmação foi enviado para ${emailInput.value}.`);
                emailInput.value = '';
            });
        }

        // Quick action buttons functionality
        document.querySelector('.action-btn.call').addEventListener('click', () => {
            window.location.href = 'tel:+553132123456';
        });

        document.querySelector('.action-btn.email').addEventListener('click', () => {
            window.location.href = 'mailto:contato@vasmateriais.com.br';
        });

        document.querySelector('.action-btn.quote').addEventListener('click', () => {
            window.location.href = '#contact';
        });

        document.querySelector('.action-btn.community').addEventListener('click', () => {
            window.location.href = '#community';
        });
   