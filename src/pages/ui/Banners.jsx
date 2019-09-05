import React,{Component} from 'react';
import {Carousel,Card} from 'antd';
import 'antd/dist/antd.css'
class Banners extends Component{

    render(){
        return(
            <div>
                <Card title="基本用法">
                    <Carousel>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <Card title="自动切换" style={{marginTop:'10px'}}>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <Card title="渐显效果" style={{marginTop:'10px'}}>
                    <Carousel effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
export default Banners;