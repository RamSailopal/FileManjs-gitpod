import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class App extends Component {
          constructor(props){
                      super(props)
                      this.state = {
                                    users: [],
                                    loading:true
                                  }
                    }
          async getUsersData(){
                      const res = await axios({url: 'process.env.REACT_APP_GITADD + '/fmqlEP?fmql=SELECT%209_6%20LIMIT%20100' })
                      console.log(res.data.results)
                      this.setState({loading:false, users: res.data.results})
                    }
          componentDidMount(){
                      this.getUsersData()
                    }
          render() {
                      const columns = [{
                                    Header: 'fmId',
                                    accessor: 'uri.fmId',
                                   },
                                   {
                                    Header: 'fmType',
                                    accessor: 'uri.fmType',
                                   },
                                   {
                                    Header: 'Value',
                                    accessor: 'uri.value',                                                        },
                                   {
                                    Header: 'Type',
                                    accessor: 'uri.type'
                                   },
                                   {
                                    Header: 'Label',
                                    accessor: 'uri.label'
                                   }
                                ]
                      return (
                                    <ReactTable
                                    data={this.state.users}
                                    columns={columns}
                                 />
                                  )
                    }
}
