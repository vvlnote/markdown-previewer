import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const Editor = (props) => (

    <div>
    <h3>Markdown Editor</h3>
    <textarea id="editor" onChange={props.onChange} value={props.value}></textarea>
    </div>
  );

const MarkdownPreview = (props) => (
    <div>
    <h3>Mrakdown Preview</h3>
    <div id="preview" dangerouslySetInnerHTML={props.markup}>
    </div>
    </div>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        markdown: 
'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Google](http://google.com)*'
      };
      this.markdownEditorUpdate = this.markdownEditorUpdate.bind(this);
  }
  createMarkup() {
    var options = {sanitize: true};
    return {__html:marked(this.state.markdown, options)};
  }

  markdownEditorUpdate(e) {
    this.setState({
      markdown: e.target.value
    });
    console.log(this.state.markdown);
  }
  render() {
    console.log(this.state.markdown);
    return (
      <div className="App">
        <Editor value={this.state.markdown} onChange={this.markdownEditorUpdate} />
        <MarkdownPreview markup={this.createMarkup()}/>
      </div>
    );
  }
}

export default App;
