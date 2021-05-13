import React from 'react';
import { shallow } from '../../enzyme';

import Login from '../login';

describe('Login Page', () => {
    
    it('should render login page', () => {
        const wrapper = shallow(<Login/>);

        expect(wrapper.find('.form-group')).toBeDefined();
        expect(wrapper.find('forgot-password')).toBeDefined();
    })
})
