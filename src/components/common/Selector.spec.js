import React from 'react';
import { Selector } from './Selector';
import { shallow } from 'enzyme';

describe('<Selector />', () => {
    it('should have two options', () => {
        const wrapper = shallow(<Selector label="Sample" name="sample" listItems={['option1', 'option2']} />);
        const actual = wrapper.find('options').length();
        expect(actual).toEqual(2);
    });

});
