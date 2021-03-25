import Highway from '@dogstudio/highway/src/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions:{
        defaul: Fade
    }
});