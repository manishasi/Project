import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  state ={
    str :"",
    editorKey : 4
  }
  handleEditorChange = (e) => {
   
  }
   clearEditor = () => {
    const newKey = this.state.editorKey * 43;
    this.setState({editorKey : newKey})
    }
countString = (e) =>{
  let localStr= this.state.str
  
  localStr = this.state.str.concat(e.key)
  
   this.setState({str: localStr})
}
  render() {
    return (
      <div>
      <Editor
      key = {this.state.editorKey}
        initialValue=""
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
        onKeyPress= {this.countString}
      />
      <div >
        word Length = {this.state.str.length}
      </div>
      <button onClick={this.clearEditor}>Clear</button>
      </div>
    );
   
  }
}

export default App;