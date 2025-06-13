document.addEventListener('DOMContentLoaded', () => {

    const cameraMotions = {
        // Common Motions
        "Static Shot (Tangkapan Statis)": "A fixed camera shot.",
        "Panning Shot (Tangkapan Panning)": "Camera moves horizontally.",
        "Tilting Shot (Tangkapan Miring)": "Camera moves vertically.",
        "Dolly Shot (Tangkapan Dolly)": "Camera moves on a dolly.",
        "Tracking Shot (Tangkapan Mengikuti)": "Camera follows the subject.",
        "Handheld Shot (Tangkapan Genggam)": "Gives a shaky, realistic feel.",
        "Zoom In (Perbesar)": "Camera zooms closer to the subject.",
        "Zoom Out (Perkecil)": "Camera zooms away from the subject.",
        // Higgsfield Motions
        "360 Orbit": "Camera moves in a full circle around the subject.",
        "3D Rotation": "Applies a 3D rotation effect.",
        "Action Run": "Fast, kinetic tracking shot mirroring a character running.",
        "Agent Reveal": "A dramatic reveal of an agent or character.",
        "Angel Wings": "Visual effect of angel wings appearing.",
        "Arc Left": "Camera arcs around the subject to the left.",
        "Arc Right": "Camera arcs around the subject to the right.",
        "Bloom Mouth": "A blooming effect from the character's mouth.",
        "Buckle Up": "A quick, jarring motion like buckling up.",
        "Bullet Time": "Slows down action while the camera moves around the subject.",
        "Building Explosion": "Simulates a building explosion.",
        "Car Chasing": "Dynamic shots simulating a car chase.",
        "Car Explosion": "Simulates a car explosion.",
        "Car Grip": "Camera fixed to a moving car.",
        "Crane Down": "Camera moves downwards on a crane.",
        "Crane Up": "Camera moves upwards on a crane, revealing scale.",
        "Crane Over The Head": "Camera moves over the head of the subject.",
        "Crash Zoom In": "Sudden, high-speed zoom-in.",
        "Crash Zoom Out": "Sudden, high-speed zoom-out.",
        "Datamosh": "A glitchy, data-moshing transition effect.",
        "Dirty Lens": "Simulates a dirty camera lens effect.",
        "Disintegration": "A disintegration effect on the subject or scene.",
        "Dolly In": "Camera physically moves closer to the subject.",
        "Dolly Left": "Camera physically moves to the left.",
        "Dolly Out": "Camera physically moves away from the subject.",
        "Dolly Right": "Camera physically moves to the right.",
        "Dolly Zoom In": "Dolly in while zooming out, distorting perspective.",
        "Dolly Zoom Out": "Dolly out while zooming in.",
        "Double Dolly": "A complex dolly movement.",
        "Dutch Angle": "Tilts the camera to create a sense of unease.",
        "Eyes In": "Focuses intensely on the eyes.",
        "Face Punch": "A rapid motion simulating a punch to the face.",
        "Fisheye": "A wide, distorted fisheye lens effect.",
        "Floating Fish": "Adds a surreal floating fish effect.",
        "Flood": "Simulates a flooding effect in the scene.",
        "Floral Eyes": "A floral pattern effect on the eyes.",
        "Flying": "Simulates a flying or soaring motion.",
        "Focus Change": "Shifts focus between foreground and background.",
        "FPV Drone": "Simulates the flight of an FPV drone.",
        "Garden Bloom": "A blooming garden effect.",
        "Glam": "A glamorous, sparkling visual effect.",
        "Glowshift": "A shifting, glowing color effect.",
        "Handheld": "Simulates a handheld camera's subtle shake.",
        "Head Tracking": "Camera tracks the movement of the head.",
        "Head Explosion": "A graphic head explosion effect.",
        "Hyperlapse": "A fast-paced timelapse with camera movement.",
        "Incline": "A shot with a noticeable incline or slope.",
        "Invisible": "An effect that makes the subject appear invisible.",
        "Jelly Drift": "A wobbly, drifting camera motion.",
        "Jib Down": "Camera moves down on a jib arm.",
        "Jib Up": "Camera moves up on a jib arm.",
        "Kiss": "A close-up, intimate kissing shot.",
        "Lazy Susan": "Slowly rotates the subject with slight camera movement.",
        "Lens Crack": "A cracked lens visual effect.",
        "Lens Flare": "Adds a cinematic lens flare.",
        "Levitation": "Makes the subject appear to levitate.",
        "Low Shutter": "Simulates a low shutter speed, creating motion blur.",
        "Medusa Gorgona": "A mythical Medusa-like effect.",
        "Melting": "A melting or dripping visual effect.",
        "Morphskin": "A skin-morphing effect.",
        "Mouth In": "A zoom or focus into a character's mouth.",
        "Push To Glass": "A motion that seems to push the subject against glass.",
        "Rap Flex": "Dynamic, energetic movements typical of rap videos.",
        "Robo Arm": "Precise, robotic camera arm movements.",
        "Skin Surge": "A surging or rippling effect on the skin.",
        "Snorricam": "A shot where the camera is rigged to the actor.",
        "Soul Jump": "A surreal 'soul jumping' out of body effect.",
        "Static": "A static, noisy visual effect.",
        "Super Dolly In": "A very slow, smooth dolly movement inwards.",
        "Super Dolly Out": "A very slow, smooth dolly movement outwards.",
        "Symbiote": "A symbiote-like (e.g., Venom) visual effect.",
        "Set on Fire": "A visual effect of the subject being on fire.",
        "Tentacles": "Adds tentacles to the scene or character.",
        "Thunder God": "A powerful, god-like thunder effect.",
        "Tilt Down": "Camera tilts downwards.",
        "Tilt up": "Camera tilts upwards.",
        "Timelapse Human": "A timelapse focused on human activity.",
        "Timelapse Landscape": "A timelapse of a landscape.",
        "Turning Metal": "A metallic, transforming visual effect.",
        "Whip Pan": "A very fast panning motion, creating a blur.",
        "Wiggle": "A slight wiggling or vibrating camera motion.",
        "Wind to Face": "Simulates wind blowing into the character's face.",
        "YoYo Zoom": "A rapid zoom in and out, like a yoyo.",
        "Zoom In": "Zooms closer to the subject.",
        "Zoom Out": "Zooms away from the subject."
    };

    const cameraSelect = document.getElementById('gerakan-kamera');
    for (const [name, description] of Object.entries(cameraMotions)) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        option.title = description;
        cameraSelect.appendChild(option);
    }

    const getElementValue = id => document.getElementById(id).value.trim();

    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', () => {
        const sceneTitle = getElementValue('judul-scene');
        const coreCharacter = getElementValue('karakter-inti');
        const characterVoice = getElementValue('suara-karakter');
        const characterAction = getElementValue('aksi-karakter');
        const characterExpression = getElementValue('ekspresi-karakter');
        const setting = getElementValue('latar-tempat');
        const cameraMovement = getElementValue('gerakan-kamera');
        const lighting = getElementValue('pencahayaan');
        const artStyle = getElementValue('gaya-video');
        const visualQuality = getElementValue('kualitas-visual');
        const atmosphere = getElementValue('suasana');
        const ambiance = getElementValue('suara-lingkungan');
        const dialog = getElementValue('dialog-karakter');
        const negativePrompt = getElementValue('negative-prompt');

        // --- Generate Indonesian Prompt ---
        let promptID = `**Judul Scene:** ${sceneTitle}\n\n`;
        promptID += `**Karakter Utama:**\n${coreCharacter}\n\n`;
        promptID += `**Detail Suara Karakter:**\n${characterVoice}\n\n`;
        promptID += `**Aksi & Ekspresi:**\n${characterAction}. Karakter menunjukkan ${characterExpression}.\n\n`;
        promptID += `**Latar & Waktu:**\n${setting}\n\n`;
        promptID += `**Detail Visual Tambahan:**\n- **Gerakan Kamera:** ${cameraMovement} (${cameraMotions[cameraMovement] || 'Tidak ada deskripsi'}) sinematik.\n- **Pencahayaan:** ${lighting}.\n- **Gaya Visual:** ${artStyle}.\n- **Kualitas:** ${visualQuality}.\n\n`;
        promptID += `**Suasana & Suara:**\nSuasana keseluruhan ${atmosphere}. ${ambiance}\n\n`;
        if(dialog) promptID += `**Dialog:**\n${dialog}\n\n`;
        promptID += `**Negative Prompt:**\n${negativePrompt}`;
        
        document.getElementById('output-indonesia').value = promptID;
        
        // --- Generate English Prompt ---
        // Simple "translation" by replacing labels. The core user content remains.
        let promptEN = `**Scene Title:** ${sceneTitle}\n\n`;
        promptEN += `**Core Character:**\n${coreCharacter}\n\n`;
        promptEN += `**Character Voice Details:**\n${characterVoice}\n\n`;
        promptEN += `**Action & Expression:**\n${characterAction}. The character shows an expression of ${characterExpression}.\n\n`;
        promptEN += `**Setting & Time:**\n${setting}\n\n`;
        promptEN += `**Additional Visual Details:**\n- **Camera Movement:** Cinematic ${cameraMovement} (${cameraMotions[cameraMovement] || 'No description'}).\n- **Lighting:** ${lighting}.\n- **Visual Style:** ${artStyle}.\n- **Quality:** ${visualQuality}.\n\n`;
        promptEN += `**Atmosphere & Sound:**\nOverall atmosphere is ${atmosphere}. ${ambiance}\n\n`;
        // Dialog remains in Indonesian as requested
        if(dialog) promptEN += `**Dialogue (as spoken):**\n${dialog}\n\n`;
        promptEN += `**Negative Prompt:**\n${negativePrompt}`;

        document.getElementById('output-english').innerText = promptEN;
    });

    // --- Settings Functionality ---
    const changeTitleBtn = document.getElementById('change-title-btn');
    changeTitleBtn.addEventListener('click', () => {
        const newTitle = getElementValue('title-changer');
        if (newTitle) {
            document.getElementById('main-title').textContent = newTitle;
        }
    });

    const changeStyleBtn = document.getElementById('change-style-btn');
    changeStyleBtn.addEventListener('click', () => {
        const colors = getElementValue('style-changer').split(',').map(c => c.trim());
        if (colors.length === 3) {
            const [primary, background, text] = colors;
            document.documentElement.style.setProperty('--primary-color', primary);
            document.documentElement.style.setProperty('--background-color', background);
            document.documentElement.style.setProperty('--card-bg-color', background);
            document.documentElement.style.setProperty('--input-bg-color', text === '#FFFFFF' || text === '#ffffff' ? '#1e1e1e' : '#f0f0f0'); // Adjust input for light/dark text
            document.documentElement.style.setProperty('--text-color', text);
            document.documentElement.style.setProperty('--header-color', text);
        } else {
            alert("Masukkan 3 warna yang dipisahkan koma (contoh: #4a90e2, #121212, #e0e0e0)");
        }
    });
}); 