/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
//import { render } from 'react-dom'
import { AgGridReact } from '@ag-grid-community/react'

import { AllCommunityModules } from '@ag-grid-community/all-modules'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css'
// import { withRouter } from 'react-router-dom'
// import axios from 'axios'
// import { connect } from 'react-redux'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
// import DialogTitle from '@material-ui/core/DialogTitle'
// import Typography from '@material-ui/core/Typography'
//import _ from '@lodash'

let isedit = false
class Costrate extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modules: AllCommunityModules,
			isModal: false,
			deleteUserId: null,
			// frameworkComponents: {
			// 	numericEditor: NumericEditor
			// },

			overlayNoRowsTemplate:
				'<div class="ag-overlay-loading-top text-center"><p>Data Not Found</p><div class="lor5"></div></div></div>',

			overlayLoadingTemplate:
				'<div class="ag-overlay-loading-top text-center mt-40"><p>Please wait while Cost Rates are loading</p><div class="loader5"></div></div></div>',

			columnDefs: [
				{
					headerName: 'Position',
					field: 'position',
					sortable: true,
					sort: 'asc',
					// filter: false,
					comparator: this.customComparator,
					width: 50,
					editable: true
				},
				{
					headerName: 'Cost Rate',
					field: 'costRate',
					sortable: true,
					// filter: false,
					width: 50,
					cellEditor: 'numericEditor',
					editable: true,
					valueFormatter(params) {
						const x = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
							params.data.costRate
						)
						return x
					}
				},
				{
					headerName: 'Cost Overtime ',
					field: 'costOverTime',
					sortable: true,
					// filter: false,
					cellEditor: 'numericEditor',
					width: 50,
					editable: true,
					valueFormatter(params) {
						const x = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
							params.data.costOverTime
						)
						return x
					}
				},
				{
					headerName: 'Cost Double',
					field: 'costDouble',
					sortable: true,
					// filter: false,
					cellEditor: 'numericEditor',
					width: 50,
					editable: true,
					valueFormatter(params) {
						const x = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
							params.data.costDouble
						)
						return x
					}
				},
				{
					headerName: isedit === false ? 'Edit' : 'Save',
					field: 'icon1',
					width: 10,
					lockPosition: false,

					cellRenderer: params => {
						const link = document.createElement('button')
						link.innerHTML = isedit === false ? '<button class="btcs2">EDIT</button>' : '<button class="btcs2">SAVE</button>'
						link.addEventListener('mousedown', e => {
							e.preventDefault()
							// this.gridApi.redrawRows()
							if (isedit === false) {
								isedit = true
								if (params.data.id === undefined || params.data.id === '' || params.data.id === null) {
									this.gridApi.getColumnDef('icon1').headerName = 'Save'
									this.gridApi.getColumnDef('icon').headerName = 'Discard'
								} else {
									this.gridApi.getColumnDef('icon1').headerName = 'Update'
									this.gridApi.getColumnDef('icon').headerName = 'Discard'
								}
								this.gridApi.refreshHeader()
								// this.gridApi.redrawRows()
								// this.props.GetAll()
								const rows = []
								const row = this.gridApi.getDisplayedRowAtIndex(params.rowIndex)
								rows.push(row)
								this.gridApi.redrawRows({ rowNodes: rows })
								console.log('edit')
								// this.props.GetAll()
								this.gridApi.setFocusedCell(params.rowIndex, 'position')
								this.gridApi.startEditingCell({
									rowIndex: params.rowIndex,
									colKey: 'position'
								})
							} else {
								isedit = false
								this.gridApi.getColumnDef('icon1').headerName = 'Edit'
								this.gridApi.getColumnDef('icon').headerName = 'Delete'
								this.gridApi.refreshHeader()
								this.gridApi.redrawRows()
								this.gridApi.stopEditing()
								this.props.GetAll()
								console.log('save')
								// console.log(params.data)
								this.handle(params.data)
								//	this.props.GetAll()
							}
						})
						return link
					}
				},
				{
					headerName: isedit === false ? 'Delete' : 'Discard',
					field: 'icon',
					width: 10,
					lockPosition: false,

					cellRenderer: params => {
						const link = document.createElement('button')
						link.innerHTML = isedit === false ? '<button class="btcs1">DELETE</button>' : '<button class="btcs1">CLOSE</button>'
						link.addEventListener('mousedown', e => {
							e.preventDefault()
							if (isedit === true) {
								isedit = false
								this.gridApi.getColumnDef('icon1').headerName = 'Edit'
								this.gridApi.getColumnDef('icon').headerName = 'Delete'
								this.gridApi.refreshHeader()
								// this.props.GetAll()
								// this.gridApi.redrawRows()
								// this.props.GetAll()
								this.gridApi.stopEditing(true)
								this.gridApi.redrawRows()
								this.props.GetAll()
							} else if (params.data.id === undefined) {
								console.log('discard')
								const selectedData = this.gridApi.getSelectedRows()
								// this.gridApi.updateRowData({ remove: selectedData })
								// this.props.GetAll()
								this.gridApi.updateRowData({ remove: [params.data] })
								// this.props.GetAll()
							} else {
								console.log('delete')
								console.log(params.data.id)
								this.deleteUser(params.data.id)
							}
						})
						return link
					}
				}
			],
			defaultColDef: {
				resizable: true,
				// width: 100,
				// editable:true,

				domLayout: 'autoHeight'
			},
			rowSelection: 'single',
			editType: 'fullRow',
			rowData: [],
			open: false,
			paginationPageSize: 50
		}
	}

	componentDidMount() {
		isedit = false

		//this.props.GetAll()
	}

	// componentWillReceiveProps(nextProps, nextState) {
	// 	if (nextProps.results !== this.props.results) {
	// 		if (nextProps.results.length) {
	// 			console.log('row')
	// 			this.setState({
	// 				//	rowData: null
	// 			})

	// 			this.setState({
	// 				rowData: nextProps.results
	// 			})
	// 			// console.log(nextProps.brtAll)
	// 			this.gridApi.redrawRows()
	// 			this.gridApi.hideOverlay()
	// 		} else {
	// 			this.gridApi.showNoRowsOverlay()
	// 			console.log('no row')
	// 		}
	// 		this.gridApi.redrawRows()
	// 	}
	// 	this.setState({
	// 		open: nextProps.status
	// 	})
	// 	console.log(nextProps.status)
	// }

	// componentDidUpdate() {
	// 	setTimeout(() => {
	// 		this.setState({ rowData: this.props.results })
	// 	}, 10)
	// }

	onGridReady = params => {
		this.gridApi = params.api
		this.gridColumnApi = params.columnApi

		//	this.gridApi.showNoRowsOverlay()
		this.props.GetAll()

		this.gridApi.showLoadingOverlay()
		this.gridApi.sizeColumnsToFit()
		window.onresize = () => {
			this.gridApi.sizeColumnsToFit()
		}
		this.gridApi.setDomLayout('autoHeight')
		document.querySelector('#myGrid').style.height = ''
	}

	onFirstDataRendered = params => {
		params.api.sizeColumnsToFit()
	}

	onGridSizeChanged = params => {
		const gridWidth = document.getElementById('myGrid').offsetWidth
		const columnsToShow = []
		const columnsToHide = []
		let totalColsWidth = 0
		const allColumns = params.columnApi.getAllColumns()
		for (let i = 0; i < allColumns.length; i++) {
			const column = allColumns[i]
			totalColsWidth += column.getMinWidth()
			if (totalColsWidth > gridWidth) {
				columnsToHide.push(column.colId)
			} else {
				columnsToShow.push(column.colId)
			}
		}
		params.columnApi.setColumnsVisible(columnsToShow, true)
		params.columnApi.setColumnsVisible(columnsToHide, false)
		params.api.sizeColumnsToFit()
	}
	onQuickFilterChanged() {
		this.gridApi.setQuickFilter(document.getElementById('quickFilter').value)
	}

	// handle = data => {
	// 	if (data.id === undefined) {
	// 		// const para = {
	// 		// 	ProjectID: '',
	// 		// 	Position: data.position,
	// 		// 	RegRate: data.regRate,
	// 		// 	OverRate: data.overRate,
	// 		// 	DoubleRate: data.doubleRate
	// 		// }

	// 		this.handlesave(data)

	// 		console.log('add')
	// 	} else {
	// 		// const para = {
	// 		// 	id:data.id,
	// 		// 	//ProjectID: '',
	// 		// 	Position: data.position,
	// 		// 	RegRate: Number(data.regRate),
	// 		// 	OverRate: Number(data.overRate),
	// 		// 	DoubleRate: Number(data.doubleRate)
	// 		// }
	// 		console.log('update')
	// 		this.handleUpdate(data)
	// 	}
	// }

	// handlesave = data => {
	// 	// console.log(data.position)
	// 	this.props.Create(data)
	// 	//	this.props.GetAll()

	// 	// axios
	// 	// 	.post(`${apiUrl}//api/CostRates/CreateCostRates`, data)
	// 	// 	.then(response => response.data)
	// 	// 	.then(
	// 	// 		result => {
	// 	// 			this.setState({})
	// 	// 		},
	// 	// 		err => {
	// 	// 			this.setState({ errors: err })
	// 	// 		}
	// 	// 	)
	// }

	// handleUpdate = data => {
	// 	this.props.Update(data)
	// 	// this.props.GetAll()
	// 	// console.log(data.position)

	// 	// axios
	// 	// 	.put(`${apiUrl}/api/CostRates/UpdateCostRates`, data)
	// 	// 	.then(response => response.data)
	// 	// 	.then(
	// 	// 		result => {
	// 	// 			this.setState({})
	// 	// 			// history.push('/EmployeeList')
	// 	// 		},
	// 	// 		err => {
	// 	// 			this.setState({ errors: err })
	// 	// 		}
	// 	// 	)
	// }

	// handleOpen = () => {
	// 	this.setState({
	// 		isModal: true
	// 	})
	// }

	// handleClose = () => {
	// 	this.setState({
	// 		isModal: false
	// 	})
	// 	// this.props.GetAll()
	// }

	// deleteUser = id => {
	// 	this.setState({
	// 		deleteUserId: id
	// 	})
	// 	this.handleOpen()
	// }

	// editUser = id => {
	// 	//	this.props.history.push(`/EmployeeUpdate?id=${id}`)
	// }

	additem = () => {
		const sort = [
			{
				colId: 'position',
				sort: 'asc'
			}
		]
		this.gridApi.setSortModel(sort)
		this.gridApi.paginationGoToFirstPage()
		this.gridApi.updateRowData({
			add: [{ position: '', costRate: 0, costOverTime: 0, costDouble: 0 }],
			addIndex: 0
		})
	}

	// handleDelete = () => {
	// 	const { deleteUserId } = this.state

	// 	if (deleteUserId) {
	// 		this.props.Delete(deleteUserId)
	// 		// this.props.GetAll()
	// 		const beforedelete = _.cloneDeep(this.state.rowData)
	// 		console.log(beforedelete)
	// 		const id = beforedelete.find(f => f.id === deleteUserId)
	// 		const index = beforedelete.indexOf(id)
	// 		beforedelete.splice(index, 1)
	// 		console.log(id)
	// 		console.log(index)
	// 		console.log(beforedelete)
	// 		this.setState({ rowData: beforedelete })
	// 	}
	// 	this.handleClose()
	// }

	// print = (value, data) => {
	// 	// console.log(value)
	// 	const d = data
	// 	console.log(data.id)
	// 	console.log(value)
	// }

	// static getDerivedStateFromProps(props, state) {
	// 	return {rowData:props.costs}
	//   }
	ed = () => {
		if (isedit === false) {
			this.gridApi.stopEditing(true)
		}
	}

	customComparator = (valueA, valueB) => {
		return valueA.toLowerCase().localeCompare(valueB.toLowerCase())
	}

	render() {
		const { error, users, isModal } = this.state

		if (error) {
			return <div>Error:{error.message}</div>
		}
		return (
			<div
				className="jss163 jss1351 sm:rounded-16 p-0 sm:p-24 pb-80 sm:pb-80 h-full ps"
				style={{ width: '100%', height: '100%' }}
			>
				{/* <h2>Cost Rates</h2> */}
				<div>
					<div style={{ marginBottom: '-30px', clear: 'both' }}> 	<h2> Cost Rates</h2></div>

					<div style={{ marginBottom: '20px', float: 'right', clear: 'both' }}>
						<input
							type="text"
							onInput={this.onQuickFilterChanged.bind(this)}
							id="quickFilter"
							placeholder="Search"
							style={{
								border: '1px solid grey',

								padding: '5px'
							}}
						/>
						<div style={{ float: 'right', marginLeft: '10px', marginTop: '3px' }}>
							<button onClick={this.additem.bind(this)} className="btcs"> Add New
								{/* <i className="material-icons edit" style={{ marginLeft: '15px' }}>
									add_circle_outline
								</i> */}
								{/* import PersonAddIcon from '@material-ui/icons/PersonAdd' */}
							</button>
						</div>
					</div>
				</div>
				{/* <Dialog
					//	onClose={this.close()}
					aria-labelledby="customized-dialog-title"
					open={this.state.open}
				>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<Typography gutterBottom>{this.props.msg}</Typography>
						</DialogContentText>
					</DialogContent>
					{/* <DialogActions>
									<Button
										onClick={() => {
											this.setState({ open: false })
										}}
										color="primary"
									>
										close
									</Button>
								</DialogActions> *
				</Dialog> */}

				<div style={{ height: 'calc(100% - 25px)', clear: 'both', marginTop: '20px' }} className="">
					<div
						id="myGrid"
						style={{
							height: '100%',
							width: '100%'
						}}
						className="ag-theme-balham-dark "
					>
						{/* <AlertDialog
							handleClose={this.handleClose}
							handleDelete={this.handleDelete}
							isModal={isModal}
							description="Are you sure want to delete?"
							title="Confirmation"
						/> */}
						<AgGridReact
							modules={this.state.modules}
							columnDefs={this.state.columnDefs}
							defaultColDef={this.state.defaultColDef}
							// suppressRowClickSelection={true}
							// singleClickEdit
							animateRows
							suppressClickEdit
							overlayLoadingTemplate={this.state.overlayLoadingTemplate}
							//	overlayNoRowsTemplate={this.state.overlayNoRowsTemplate}
							// rowSelection={this.state.rowSelection}
							onCellEditingStarted={this.ed}
							onGridReady={this.onGridReady}
							rowData={this.state.rowData}
							// rowData={this.props.results}
							components={this.state.components}
							editType={this.state.editType}
							frameworkComponents={this.state.frameworkComponents}
							pagination
							tabToNextCell
							onGridSizeChanged={this.onGridSizeChanged.bind(this)}
							enableCellChangeFlash
							paginationPageSize={this.state.paginationPageSize}
							domLayout={this.state.domLayout}
						/>
					</div>
				</div>
			</div>
		)
	}
}

// const mapStateToProps = state => ({
//     costs: state.costs.costs
// })

// const mapStateToProps = state => ({
// 	results: state.results.results,
// 	status: state.results.status,
// 	msg: state.results.msg
// })

export default Costrate
