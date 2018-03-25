import React from 'react';
import { shallow } from 'enzyme';
import Cabecera from '../../componentes/cabecera';

// .button, #id, h1
test('deberia renderizar la cabecera ', ()=>{
    const envoltura = shallow(<Cabecera/>);
    expect(envoltura).toMatchSnapshot();
});

// const renderer = new ReactShallowRenderer(); 
    // renderer.render(<Cabecera/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());