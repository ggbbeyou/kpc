import template from './index.vdt';
import Intact from 'intact';
import './index.styl';

export default class extends Intact {
    @Intact.template
    static template = template;
}
