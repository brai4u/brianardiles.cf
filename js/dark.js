window.onload = () => {
    const lightModeButton = document.getElementById("light-mode")
    const darkModeButton = document.getElementById("dark-mode")

    lightModeButton.addEventListener('click',()  => {
        setMode('light', lightModeButton, darkModeButton)
    });

    darkModeButton.addEventListener('click',()  => {
        setMode('dark', lightModeButton, darkModeButton)
    });

    const getThemeAndSet = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode('dark', lightModeButton, darkModeButton)
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
            setMode('light', lightModeButton, darkModeButton)
        }
    }

    getThemeAndSet()
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {getThemeAndSet()})
}


const setMode = (mode, lightModeButton, darkModeButton) => {
    if (mode === 'light') {
        document.body.classList.remove("dark")
        lightModeButton.classList.add("active-mode")
        darkModeButton.classList.remove("active-mode")
    } else if (mode === 'dark') {
        document.body.classList.add("dark")
        lightModeButton.classList.remove("active-mode")
        darkModeButton.classList.add("active-mode")
    }
}
