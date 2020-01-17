import React from 'react';
import Tooltip from 'kpc-react/components/tooltip';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Tooltip content="hello">
                    hover the text
                </Tooltip>
                <br /><br />
                <Tooltip>
                    don't show anything if content is empty 
                </Tooltip>
                <br /><br />
                <Tooltip content="hello" theme="light">
                    light theme 
                </Tooltip>
                <br /><br />
                <Tooltip content="hello" disabled>
                    disabled
                </Tooltip>
            </div>
        )
    }
}