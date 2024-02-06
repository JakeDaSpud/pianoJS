const musicNotesMap = new Map();

// Map of Scientific Pitch Notation to Frequency in Hz
musicNotesMap.set('C0', 16.35);
musicNotesMap.set('C#0/Db0', 17.32);
musicNotesMap.set('D0', 18.35);
musicNotesMap.set('D#0/Eb0', 19.45);
musicNotesMap.set('E0', 20.60);
musicNotesMap.set('F0', 21.83);
musicNotesMap.set('F#0/Gb0', 23.12);
musicNotesMap.set('G0', 24.50);
musicNotesMap.set('G#0/Ab0', 25.96);
musicNotesMap.set('A0', 27.50);
musicNotesMap.set('A#0/Bb0', 29.14);
musicNotesMap.set('B0', 30.87);
musicNotesMap.set('C1', 32.70);
musicNotesMap.set('C#1/Db1', 34.65);
musicNotesMap.set('D1', 36.71);
musicNotesMap.set('D#1/Eb1', 38.89);
musicNotesMap.set('E1', 41.20);
musicNotesMap.set('F1', 43.65);
musicNotesMap.set('F#1/Gb1', 46.25);
musicNotesMap.set('G1', 49.00);
musicNotesMap.set('G#1/Ab1', 51.91);
musicNotesMap.set('A1', 55.00);
musicNotesMap.set('A#1/Bb1', 58.27);
musicNotesMap.set('B1', 61.74);
musicNotesMap.set('C2', 65.41);
musicNotesMap.set('C#2/Db2', 69.30);
musicNotesMap.set('D2', 73.42);
musicNotesMap.set('D#2/Eb2', 77.78);
musicNotesMap.set('E2', 82.41);
musicNotesMap.set('F2', 87.31);
musicNotesMap.set('F#2/Gb2', 92.50);
musicNotesMap.set('G2', 98.00);
musicNotesMap.set('G#2/Ab2', 103.83);
musicNotesMap.set('A2', 110.00);
musicNotesMap.set('A#2/Bb2', 116.54);
musicNotesMap.set('B2', 123.47);
musicNotesMap.set('C3', 130.81);
musicNotesMap.set('C#3/Db3', 138.59);
musicNotesMap.set('D3', 146.83);
musicNotesMap.set('D#3/Eb3', 155.56);
musicNotesMap.set('E3', 164.81);
musicNotesMap.set('F3', 174.61);
musicNotesMap.set('F#3/Gb3', 185.00);
musicNotesMap.set('G3', 196.00);
musicNotesMap.set('G#3/Ab3', 207.65);
musicNotesMap.set('A3', 220.00);
musicNotesMap.set('A#3/Bb3', 233.08);
musicNotesMap.set('B3', 246.94);
musicNotesMap.set('C4', 261.63);
musicNotesMap.set('C#4/Db4', 277.18);
musicNotesMap.set('D4', 293.66);
musicNotesMap.set('D#4/Eb4', 311.13);
musicNotesMap.set('E4', 329.63);
musicNotesMap.set('F4', 349.23);
musicNotesMap.set('F#4/Gb4', 369.99);
musicNotesMap.set('G4', 392.00);
musicNotesMap.set('G#4/Ab4', 415.30);
musicNotesMap.set('A4', 440.00);
musicNotesMap.set('A#4/Bb4', 466.16);
musicNotesMap.set('B4', 493.88);
musicNotesMap.set('C5', 523.25);
musicNotesMap.set('C#5/Db5', 554.37);
musicNotesMap.set('D5', 587.33);
musicNotesMap.set('D#5/Eb5', 622.25);
musicNotesMap.set('E5', 659.25);
musicNotesMap.set('F5', 698.46);
musicNotesMap.set('F#5/Gb5', 739.99);
musicNotesMap.set('G5', 783.99);
musicNotesMap.set('G#5/Ab5', 830.61);
musicNotesMap.set('A5', 880.00);
musicNotesMap.set('A#5/Bb5', 932.33);
musicNotesMap.set('B5', 987.77);
musicNotesMap.set('C6', 1046.50);
musicNotesMap.set('C#6/Db6', 1108.73);
musicNotesMap.set('D6', 1174.66);
musicNotesMap.set('D#6/Eb6', 1244.51);
musicNotesMap.set('E6', 1318.51);
musicNotesMap.set('F6', 1396.91);
musicNotesMap.set('F#6/Gb6', 1479.98);
musicNotesMap.set('G6', 1567.98);
musicNotesMap.set('G#6/Ab6', 1661.22);
musicNotesMap.set('A6', 1760.00);
musicNotesMap.set('A#6/Bb6', 1864.66);
musicNotesMap.set('B6', 1975.53);
musicNotesMap.set('C7', 2093.00);
musicNotesMap.set('C#7/Db7', 2217.46);
musicNotesMap.set('D7', 2349.32);
musicNotesMap.set('D#7/Eb7', 2489.02);
musicNotesMap.set('E7', 2637.02);
musicNotesMap.set('F7', 2793.83);
musicNotesMap.set('F#7/Gb7', 2959.96);
musicNotesMap.set('G7', 3135.96);
musicNotesMap.set('G#7/Ab7', 3322.44);
musicNotesMap.set('A7', 3520.00);
musicNotesMap.set('A#7/Bb7', 3729.31);
musicNotesMap.set('B7', 3951.07);
musicNotesMap.set('C8', 4186.01);
musicNotesMap.set('C#8/Db8', 4434.92);
musicNotesMap.set('D8', 4698.63);
musicNotesMap.set('D#8/Eb8', 4978.03);
musicNotesMap.set('E8', 5274.04);
musicNotesMap.set('F8', 5587.65);
musicNotesMap.set('F#8/Gb8', 5919.91);
musicNotesMap.set('G8', 6271.93);
musicNotesMap.set('G#8/Ab8', 6644.88);
musicNotesMap.set('A8', 7040.00);
musicNotesMap.set('A#8/Bb8', 7458.62);
musicNotesMap.set('B8', 7902.13);

// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create oscillator node
const ozzy = audioCtx.createOscillator();

// sound length
let duration = 2000; // in milliseconds

setWaveform = (type) => {
    // The types the oscillator can take are: 'sine', 'square', 'sawtooth', 'triangle', 'custom'
    ozzy.type = type;
}

playNote = (note) => {
    console.log("Note Length: " + duration);

    // create a new oscillator node for each note
    const ozzy = audioCtx.createOscillator();
    ozzy.connect(audioCtx.destination);

    audioCtx.resume();
    ozzy.frequency.value = musicNotesMap.get(note);
    console.log("Ozzy's Frequency Value: " + ozzy.frequency.value);
    ozzy.start();

    // stop the oscillator after the specified duration
    setTimeout(() => {
        ozzy.stop();
    }, duration);
}

setNoteLength = (length) => {
    document.getElementById('noteLength').innerHTML = length;
    duration = length * 1000;
}