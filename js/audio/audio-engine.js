export class AudioEngine{constructor(){this.ctx=null;}async init(){this.ctx=new(window.AudioContext||window.webkitAudioContext)();return this.ctx;}}
