import { Curtains, Plane, Vec2, Vec3 } from 'curtainsjs';

import removeComponents from 'gia/removeComponents'
import loadComponents from 'gia/loadComponents'
import config from 'gia/config'
import components from './components/giaComponents'
import { locoCreate, locoReload, onScrollHideHeader } from './components/locomotive-scroll';

import LocomotiveScroll from 'locomotive-scroll'

// config.set('log', false);
loadComponents(components)

document.addEventListener("DOMContentLoaded", function () {
    // locoCreate()
    // onScrollHideHeader()
});

