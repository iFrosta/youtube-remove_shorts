let run = async () => {
    let timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)), lastScrollY = window.scrollY

    window.onscroll = function () {
        if (window.scrollY > lastScrollY) removeSHORTS(false)
    }

    await removeSHORTS(true)

    async function removeSHORTS(wait = false) {
        lastScrollY = window.scrollY

        if (document.querySelectorAll('[overlay-style="SHORTS"]').length > 0) {
            let elements = document.querySelectorAll('[overlay-style="SHORTS"]')

            for (let i = 0; i < elements.length; i++) {
                elements[i].closest("ytd-grid-video-renderer").remove()
            }

        } else if (wait) {
            await timeout(1000).then(() => removeSHORTS(true))
        }
    }
}

run()