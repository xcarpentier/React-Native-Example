import React, {Component} from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

export default class FooterTabs extends Component {
    render() {
        return (
            <Footer>
                    <FooterTab>
                        <Button>
                            <Badge>2</Badge>
                            Apps
                            <Icon name='ios-apps-outline' />
                        </Button>
                        <Button>
                            Camera
                            <Icon name='ios-camera-outline' />
                        </Button>
                        <Button active>
                            Navigate
                            <Icon name='ios-compass' />
                        </Button>
                        <Button>
                            Contact
                            <Icon name='ios-contact-outline' />
                        </Button>
                    </FooterTab>
                    </Footer>

        );
    }
}
