import React,{Component} from'react';

export default class fileUpload extends Component{


    render() {
        return(
          <div>
              <h2 align="center">Assigment</h2><br/>
              <form>
              <div class="form-group">
                  <label for="exampleFormControlFile1">Upload Files (Max 10MB)</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
              </div>
          </form>
          </div>
        );
    }
}