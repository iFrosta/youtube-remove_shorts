let run = async () => {
    let timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)), lastScrollY = window.scrollY

    window.onscroll = () => {
        if (window.scrollY > lastScrollY) removeSHORTS(false)
    }

    await removeSHORTS(true)

    async function removeSHORTS(wait = false) {
        lastScrollY = window.scrollY
        let elements = document.querySelectorAll('[overlay-style="SHORTS"]')

        if (elements.length >= 1) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].closest("ytd-grid-video-renderer").remove()
            }

        } else if (wait) {
            await timeout(500).then(() => removeSHORTS(true))
        }
    }
}

run()