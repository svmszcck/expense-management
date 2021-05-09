const mobile = "767px";
const tablet = "1023px";
const desktop = "1215px";

export default {
    mobile: `(max-width: ${mobile})`,
    tablet: `(min-width: ${mobile}) and (max-width: ${tablet})`,
    desktop: `(min-width: ${tablet}) and (max-width: ${desktop})`,
    retina: `(min-width: ${desktop})`
};