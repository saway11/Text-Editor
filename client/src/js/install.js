const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompts = event;

    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element