          particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#a600f3'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#a600f3'
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#a600f3',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        // Animação de entrada
        $(document).ready(function() {
            $('.container').css('opacity', '0');
            $('.container').css('transform', 'translateY(20px)');
            
            setTimeout(function() {
                $('.container').css('transition', 'all 0.8s ease');
                $('.container').css('opacity', '1');
                $('.container').css('transform', 'translateY(0)');
            }, 300);
        });

        // Validação de formulário
        $('#login-form').on('submit', function(e) {
            e.preventDefault();
            
            const username = $('#username').val();
            const password = $('#password').val();
            let isValid = true;
            
            // Validar nome de usuário
            if (username.length < 3) {
                $('#username-error').text('O nome de usuário deve ter pelo menos 3 caracteres');
                $('#username-error').show();
                isValid = false;
            } else {
                $('#username-error').hide();
            }
            
            // Validar senha
            if (password.length < 6) {
                $('#password-error').text('A senha deve ter pelo menos 6 caracteres');
                $('#password-error').show();
                isValid = false;
            } else {
                $('#password-error').hide();
            }
            
            if (isValid) {
                // Mostrar animação de carregamento
                $('#loading').addClass('active');
                
                // Simular autenticação
                setTimeout(function() {
                    $('#loading').removeClass('active');
                    
                    // Animação de sucesso
                    $('#login-btn').text('CONECTADO');
                    $('#login-btn').css('background', '#00b300');
                    
                    // Redirecionar (simulação)
                    setTimeout(function() {
                        alert('Login bem-sucedido! Redirecionando...');
                        // window.location.href = 'dashboard.html';
                    }, 1000);
                }, 2000);
            }
        });

        // Efeito de foco nos campos
        $('.input-group input').each(function() {
            $(this).on('blur', function() {
                if ($(this).val() !== '') {
                    $(this).addClass('not-empty');
                } else {
                    $(this).removeClass('not-empty');
                }
            });
        });

        // Efeito de partículas ao clicar no botão
        $('#login-btn').on('mousedown', function(e) {
            const x = e.clientX - $(this).offset().left;
            const y = e.clientY - $(this).offset().top;
            
            const ripple = $('<span></span>').css({
                position: 'absolute',
                top: y + 'px',
                left: x + 'px',
                width: '0',
                height: '0',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
            });
            
            $(this).append(ripple);
            
            setTimeout(function() {
                ripple.css({
                    width: '300px',
                    height: '300px',
                    opacity: '0',
                    transition: 'all 0.6s ease'
                });
                
                setTimeout(function() {
                    ripple.remove();
                }, 600);
            }, 10);
        });