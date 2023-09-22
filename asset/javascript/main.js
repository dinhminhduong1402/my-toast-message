

;(
    function handleShowToast() {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const btns = $$('.btn')
        const toastStatus = {
            success: {
                title: 'success',
                desc: 'you can access all file in this folder',
                icon: 'fa-regular fa-circle-check',
            },
            info: {
                title: 'info',
                desc: 'you can access all file in this folder',
                icon: 'fa-solid fa-info',
            },
            warning: {
                title: 'warning',
                desc: 'you can access all file in this folder',
                icon: 'fa-solid fa-triangle-exclamation',
            },
            error: {
                title: 'error',
                desc: 'you can access all file in this folder',
                icon: 'fa-solid fa-triangle-exclamation',
            },
        }

        function showToast({title, desc, icon}) {
            const block = $('.block')

            block.innerHTML += `
                <div class="toast toast--${title}">
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__desc">${desc}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            
            setTimeout(() => {
                block.firstElementChild.remove()
            }, 3000);
        }
        // showToast()
        btns.forEach(btn => {
            btn.onclick = function() {
                let status = btn.classList[1].slice(5)
                showToast(toastStatus[status])
            }
        });
    }
)()
