const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store the triggered events
    window.deferredPrompt = event;
    
    // remove the hidden class for the btn
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
        return;
    }

    // prompt
    promptEvemt.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});