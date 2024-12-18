// SSMClient: Solid Solutions

const ReportSettings = {
	/*	========================================
					General Settings
		======================================== */
	GenerateIDs: true,
	LengthLongestEdge: true,
	UseTopLevelProperties: true,
	AutoHideToggles: true,
	CheckForUpdates: true,
	ImperialUnits: false,
	ImperialRoundToNearest: 1 / 64,

	/*	========================================
					Report Menu
		======================================== */

	ReportMenu: [
		// { Page: 'Panels', Name: 'Finished Sizes' },
		// { Page: 'Panels', Hide: true },
		// { Page: 'Stocks', Name: 'Rough Sizes' },
	],

	ReportTableTitles: [
		// {Page: 'Panels', TableTitle: 'Panels' },
		// {Page: 'FrameDetails', TableTitle: 'Panels' },
	],

	/*	========================================
					Projects Page
		======================================== */

	ProjectsColumns: [
		{ Property: 'ProjectName', Header: 'Name', Type: 'alphanum', Link: true, Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'Username', Header: 'Username', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '140' },
		{ Property: 'ReportRunTime', Header: 'RunTime', Type: 'alphanum', Search: false, Print: true, HozAlign: 'center', Width: '120' },
		{ Property: 'Date', Header: 'Date', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '120' },
		{ Property: 'ReportVersion', Header: 'Version', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		{ Property: 'SwoodDesign', Header: 'Design', Type: 'tickCross', Search: false, Print: true, HozAlign: 'center', Width: '110' },
		{ Property: 'SwoodCam', Header: 'Cam', Type: 'tickCross', Search: false, Print: true, HozAlign: 'center', Width: '110' },
		{ Property: 'SwoodNesting', Header: 'Nesting', Type: 'tickCross', Search: false, Print: true, HozAlign: 'center', Width: '110' },
	],

	SortByProjects: [],

	/*	========================================
					Report Header
		======================================== */

	ReportHeader: [
		{ Property: 'ProjectName', Prefix: 'Project', AutoHide: false, Print: true },
		{ Property: 'CreatedBy', Prefix: 'Created By', AutoHide: true, Print: true },
		{ Property: 'ProjectPath', Prefix: 'Project Path', AutoHide: true, Print: false },
		{ Property: 'ProjectQuantity', Prefix: 'Project Quantity', AutoHide: true, Print: false },
		{ Property: 'Customer', Prefix: 'Customer', AutoHide: true, Print: true },
		{ Property: 'OrderNumber', Prefix: 'Order Number', AutoHide: true, Print: true },
		{ Property: 'Date', Prefix: 'Date', AutoHide: false, Print: true },
		{ Property: 'PDFRelativePath', Prefix: 'PDF', AutoHide: true, Print: false },
		{ Property: 'ProjectComments', Prefix: 'Comments', AutoHide: true, Print: false },
	],

	/*	========================================
					Panels Page
		======================================== */

	NoParentTitle: 'No Parent',
	CombinedPanelName: 'Combined Panel',
	EBStringSeparator: ' ',
	EBStringReverse: true,
	PanelsDefaultGroup: 0,

	PanelColumns: [
		{ Property: 'ProgramIndicator', Header: '', Type: 'number', Search: false, Print: true, HozAlign: 'center', Width: '40' },
		{ Property: 'BeamSawIndicator', Header: '', Type: 'number', Search: false, Print: true, HozAlign: 'center', Width: '40' },
		{ Property: 'PDFRelativePath', Header: '', formatter: 'PDF', Search: false, Print: false, HozAlign: 'center', Width: '40' },
		{ Property: 'PanelID', Header: '#', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '50' },
		// { Property: 'Image', Header: '', Type: 'image', Search: false, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Name', Header: 'Part Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		// { Property: 'EBString', Header: 'Edging', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: '200' },
		// { Property: 'EBStringOrder', Header: 'Edging by Order', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: '200' },
		{ Property: 'Description', Header: 'Description', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '100' },
		// { Property: 'NestingQty', Header: 'Nesting Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '180' },
		// { Property: 'DesignQty', Header: 'DesignQty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '180' },
		{ Property: 'HasGrain', Header: 'Grain', Type: 'tickCross', Search: false, Print: true, HozAlign: 'center', Width: '90' },
		// { Property: 'Scribe', Header: 'Scribe', Type: 'tickCross', Search: false, Print: true, HozAlign: 'center', Width: '90' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
		// { Property: 'IsNested', Header: 'Nested', Type: 'tickCross', Search: false, Print: false, HozAlign: 'center', Width: '80' },
		// { Property: 'HasEdgebands', Header: 'EB', Type: 'tickCross', Search: false, Print: false, HozAlign: 'center', Width: '80' },
		// { Property: 'HasLaminates', Header: 'Lam', Type: 'tickCross', Search: false, Print: false, HozAlign: 'center', Width: '80' },
		// { Property: 'HasPaint', Header: 'Paint', Type: 'tickCross', Search: false, Print: false, HozAlign: 'center', Width: '80' },
		// { Property: 'HasProfiles', Header: 'PF', Type: 'tickCross', Search: false, Print: false, HozAlign: 'center', Width: '80' },
		// { Property: 'TopLaminate', Header: 'Top Laminate', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		// { Property: 'BottomLaminate', Header: 'Bottom Laminate', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		// { Property: 'PanelDimensions', Header: 'Dimensions', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '180' },
		// { Property: 'Comments', Header: 'Comments', Type: 'string', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		// { Property: 'CommentsCP', Header: 'CommentsCP', Type: 'string', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		// { Property: 'TotalCost', Header: 'Cost', Type: 'currency', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
	],

	SortByPanel: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Stocks Page
		======================================== */

	CombinedStockName: 'Combined Stock',
	CombineStocks: true,
	StocksDefaultGroup: 0,

	StockColumns: [
		{ Property: 'PanelID', Header: '#', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '60' },
		{ Property: 'Name', Header: 'Part Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'Description', Header: 'Description', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
		{ Property: 'RoughLength', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'RoughWidth', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'RoughThickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '100' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
	],

	SortByStock: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Laminates Page
		======================================== */

	LaminateColumns: [
		{ Property: 'PanelName', Header: 'Panel', Type: 'alphanum', Search: true, HozAlign: 'left', Width: 'auto', Link: true },
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, HozAlign: 'center', Width: '250' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, HozAlign: 'center', Width: '100' },
	],

	SortByLaminate: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Edgebands Page
		======================================== */

	EdgebandColumns: [
		{ Property: 'PanelName', Header: 'Panel', Type: 'alphanum', Search: true, HozAlign: 'left', Width: 'auto', Link: true },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, HozAlign: 'center', Width: '250' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, HozAlign: 'center', Width: '100' },
	],

	SortByEdgeband: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'PanelName', Type: -1 },
		{ Property: 'Order', Type: 1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					BeamSaw Page
		======================================== */

	CombinedBeamSawName: 'Combined BeamSaw',
	CombineBeamSaw: true,
	BeamSawDefaultGroup: 0,

	BeamSawColumns: [],

	SortByBeamSaw: [],

	/*	========================================
					Weldments Page
		======================================== */

	CombineWeldments: true,

	CombinedWeldmentName: 'Combined Weldment',

	WeldmentColumns: [
		{ Property: 'Name', Header: 'Part Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'Description', Header: 'Description', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
		{ Property: 'WeldmentLength', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'WeldmentAngle1', Header: 'Angle 1', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '120' },
		{ Property: 'WeldmentAngle2', Header: 'Angle 2', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '120' },
		// { Property: 'WeldmentBBLength', Header: 'BB Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		// { Property: 'WeldmentBBWidth', Header: 'BB Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		// { Property: 'WeldmentBBThickness', Header: 'BB Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		// { Property: 'BBDimensions', Header: 'BB Dimensions', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'WeldmentBBVolume', Header: 'BB Volume', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '100' },
		// { Property: 'WeldmentTotalLength', Header: 'Total Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '160' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
	],

	SortByWeldment: [
		{ Property: 'WeldmentLength', Type: -1 },
		{ Property: 'Name', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Panel Details Page
		======================================== */

	ShowPanelID: { Property: 'PanelID', Header: 'Panel ID', Show: true },

	WriteStockProperties: true,
	ShowEdgebandCorners: false,

	// Set Property to '' to define side header
	PanelDetailsColumns: [
		{ Property: '', Header: 'Panel', Width: '18%' },
		{ Property: 'Length', Header: 'Length', Width: '10%' },
		{ Property: 'Width', Header: 'Width', Width: '10%' },
		{ Property: 'Thickness', Header: 'Thickness', Width: '10%' },
	],

	// Column widths already defined in PanelDetailsColumns
	PanelDetailsStockColumns: [{ Property: '', Header: 'Stock' }, { Property: 'RoughLength' }, { Property: 'RoughWidth' }, { Property: 'RoughThickness' }],

	PanelDetailsExtraColumns: [
		{ Property: 'Material', Header: 'Material', Width: '10%' },
		{ Property: 'Description', Header: 'Description', Width: '10%' },
		{ Property: 'Quantity', Header: 'Qty', Width: '5%' },
		// { Property: 'TotalCost', Header: 'Cost', Width: '5%', Type: 'currency' },
	],

	PanelListColumns: [
		{ Property: 'Title', Header: 'Panel List' },
		{ Property: 'Name', Header: 'Name', Width: '60%' },
		{ Property: 'Description', Header: 'Description', Width: '30%' },
		{ Property: 'Quantity', Header: 'Qty', Width: '10%' },
	],

	PanelLayersColumns: [
		{ Property: 'Title', Header: 'Layers' },
		{ Property: 'Name', Header: 'Name', Width: '60%' },
		{ Property: 'Material', Header: 'Material', Width: '30%' },
		{ Property: 'Thickness', Header: 'Thickness', Width: '10%' },
	],

	PanelLaminatesColumns: [
		{ Property: 'Title', Header: 'Laminates' },
		{ Property: 'Name', Header: 'Laminate', Width: '20%' },
		{ Property: 'Material', Header: 'Material', Width: '50%' },
		{ Property: 'Thickness', Header: 'Thickness', Width: '30%' },
	],

	PanelEdgebandsColumns: [
		{ Property: 'Title', Header: 'Edgebands' },
		{ Property: 'Name', Header: 'Edgebands', Width: '20%' },
		{ Property: 'Material', Header: 'Material', Width: '10%' },
		{ Property: 'Thickness', Header: 'Thickness', Width: '10%' },
	],

	PanelProcessColumns: [
		{ Property: 'Title', Header: 'Panel Process' },
		{ Property: 'Name', Header: 'Process', Width: '20%' },
		{ Property: 'ZoneName', Header: 'Zone', Width: '20%' },
	],

	PanelProgramsColumns: [
		{ Property: 'Title', Header: 'Programs' },
		{ Property: 'ProgramName', Header: 'Name', Width: '20%' },
		{ Property: 'ProgramFileName', Header: 'Code', Width: '80%' },
	],

	PanelCombinedProgramsColumns: [
		{ Property: 'Title', Header: 'Programs' },
		{ Property: 'PartName', Header: 'Panel Name', Width: '40%' },
		{ Property: 'ProgramName', Header: 'Name', Width: '20%' },
		{ Property: 'ProgramFileName', Header: 'Code', Width: '40%' },
	],

	/*	========================================
					Frames Page
		======================================== */

	FrameNameProperty: 'Name',

	FrameColumns: [
		{ Property: 'PDFRelativePath', Header: '', formatter: 'PDF', Search: false, Print: false, HozAlign: 'center', Width: '40' },
		{ Property: 'Name', Header: 'Frame Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'Description', Header: 'Description', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Height', Header: 'Height', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Depth', Header: 'Depth', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'Weight', Header: 'Weight', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		// { Property: 'Comments', Header: 'Comments', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '300' },
		// { Property: 'CommentsCP', Header: 'Comments', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '300' },
		// { Property: 'TotalCost', Header: 'Cost', Type: 'currency', Search: true, Print: true, HozAlign: 'center', Width: '150' },
	],

	SortByFrame: [
		{ Property: 'Name', Type: 1 },
		{ Property: 'Height', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Depth', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Frames Details Page
		======================================== */

	FrameDetailsColumns: [
		{ Property: 'Height', Header: 'Height', Style: '', Width: '250' },
		{ Property: 'Width', Header: 'Width', Style: '', Width: '250' },
		{ Property: 'Depth', Header: 'Depth', Style: '', Width: '250' },
		{ Property: 'Quantity', Header: 'Qty', Style: '', Width: '250' },
		// { Property: 'MaterialCost', Header: 'MaterialCost', Type: 'currency', Style: '', Width: '250' },
		// { Property: 'HardwareCost', Header: 'HardwareCost', Type: 'currency', Style: '', Width: '250' },
		// { Property: 'TotalCost', Header: 'TotalCost', Type: 'currency', Style: '', Width: 'auto' },
	],

	FramePanelColumns: [
		// { Property: 'Title', Header: 'Panels' },
		{ Property: 'PanelID', Header: '#', Style: '', Width: '5%' },
		{ Property: 'Name', Header: 'Part Name', Style: '', Link: true, Width: 'auto' },
		{ Property: 'Description', Header: 'Description', Style: '', Width: '20%' },
		{ Property: 'PanelDimensions', Header: 'Dimensions', Style: '', Width: '15%' },
		{ Property: 'Quantity', Header: 'Qty', Style: '', Width: '5%' },
		{ Property: 'Material', Header: 'Material', Style: '', Width: '15%' },
	],

	SortByPanelFrame: [],

	FrameHardwareColumns: [
		// { Property: 'Title', Header: 'Hardware' },
		{ Property: 'Name', Header: 'Name', Style: '', Width: 'auto' },
		{ Property: 'Description', Header: 'Description', Style: '', Width: '25%' },
		{ Property: 'Configuration', Header: 'Configuration', Style: '', Width: '25%' },
		{ Property: 'Supplier', Header: 'Supplier', Style: '', Width: '10%' },
		{ Property: 'Quantity', Header: 'Qty', Style: '', Width: '100px' },
		// { Property: 'UnitCost', Header: 'Unit Cost', Type: 'currency', Style: '', Width: '100px' },
		// { Property: 'FrameTotalCost', Header: 'FrameTotalCost', Type: 'currency', Style: '', Width: '100px' },
		// { Property: 'TotalCost', Header: 'Total Cost', Type: 'currency', Style: '', Width: '100px' },
	],

	FrameProgramColumns: [
		// { Property: 'Title', Header: 'Programs' },
		// { Property: 'PartName', Header: 'Part Name', Style: '', Width: '50%' },
		{ Property: 'ProgramFileName', Header: 'Program', Style: '', Width: '50%' },
	],

	/*	========================================
					Programs Page
		======================================== */

	ProgramsDefaultGroup: 0,
	CombinePrograms: false,
	CombinedProgramName: 'Combined Program',

	ProgramColumns: [
		{ Property: 'Name', Header: 'Part Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		{ Property: 'ProgramName', Header: 'Program Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'ProgramFileName', Header: 'Program File Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '400' },
		// { Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		// { Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		// { Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'Time', Header: 'Time', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'ProgramCost', Header: 'ProgramCost', Type: 'currency', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Machine', Header: 'Machine', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '150' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '75' },
		{ Property: 'Comments', Header: 'Comments', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '250' },
	],

	SortByProgram: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Program Details Page
		======================================== */

	ShowPanelIDPrograms: { Property: 'PanelID', Header: 'Panel ID', Show: true },
	NoParentTitlePrograms: 'No Parent',

	ProgramDetailsColumns: [
		{ Property: 'Length', Header: 'Length', Width: '20%' },
		{ Property: 'Width', Header: 'Width', Width: '20%' },
		{ Property: 'Thickness', Header: 'Thickness', Width: '20%' },
		{ Property: 'Material', Header: 'Material', Width: '20%' },
		{ Property: 'Quantity', Header: 'Qty', Width: '20%' },
	],

	ProgramListColumns: [
		{ Property: 'Title', Header: 'Programs' },
		{ Property: 'ProgramName', Header: 'Name', Width: '20%' },
		{ Property: 'ProgramFileName', Header: 'Code', Width: '70%' },
		{ Property: 'Machine', Header: 'Machine', Width: '10%' },
	],

	ProgramDetailsShowLayers: false,
	ProgramDetailsShowLaminates: false,
	ProgramDetailsShowEdgebands: false,
	ProgramDetailsShowPanelProcess: false,

	/*	========================================
					Sheets
		======================================== */

	SheetsDefaultGroup: 0,

	SheetsColumns: [
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: '600' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'MaterialThickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
	],

	SortBySheets: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Nesting
		======================================== */

	NestingDefaultGroup: 0,

	NestingPanelsColumns: [
		{ Property: 'ProgramIndicator', Header: '', Type: 'number', Search: false, Print: true, HozAlign: 'center', Width: '40' },
		{ Property: 'PanelID', Header: '#', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '60' },
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: '600' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
	],

	SortByNestingPanels: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Sheet Details
		======================================== */

	GroupSheetPanels: true,
	ShowNestTools: true,

	NestedSheetColumns: [
		{ Property: 'ProgramName', Header: '' },
		{ Property: 'Length', Header: 'Length', HozAlign: 'center', Width: '10%' },
		{ Property: 'Width', Header: 'Width', HozAlign: 'center', Width: '10%' },
		{ Property: 'MaterialThickness', Header: 'Thickness', HozAlign: 'center', Width: '10%' },
		{ Property: 'Material', Header: 'Material', HozAlign: 'center', Width: '10%' },
		{ Property: 'Quantity', Header: 'Quantity', HozAlign: 'center', Width: '10%' },
	],

	NestedSheetPanelsColumns: [
		{ Property: '', Header: 'Panel List' },
		{ Property: 'NestingID', Header: 'Nesting ID', HozAlign: 'center', Width: '10%' },
		{ Property: 'Name', Header: 'Name', HozAlign: 'center', Width: 'auto' },
	],

	/*	========================================
					Cutting Pattern
		======================================== */

	CuttingPatternSettings: {
		DisplayProperty: 'itemName',
		ShowStatistics: true,
		PrintStatistics: true,
		ShowCutList: true,
		PrintCutList: true,
		ShowPanelIDs: true,
		ShowPanelDimensions: true,
		ShowWasteIDs: false,
		ShowWasteDimensions: false,
		ShowTrimIDs: false,
		ShowTrimDimensions: false,
	},

	CuttingPatternColumns: [
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto' },
		// { Property: 'usedAreaPercentage', Header: 'usedAreaPercentage', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'wasteAreaPercentage', Header: 'wasteAreaPercentage', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'trimAreaPercentage', Header: 'trimAreaPercentage', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'paddingAreaPercentage', Header: 'paddingAreaPercentage', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		// { Property: 'usedAreaFormatted', Header: 'usedAreaFormatted', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'panelCount', Header: 'panelCount', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '200' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '100' },
	],

	SortByCuttingPattern: [
		{ Property: 'Name', Type: 1 },
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Cutting Pattern Details
		======================================== */

	CuttingPatternDetailsColumns: [
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left' },
		{ Property: 'Length', Header: 'Length', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Width', Header: 'Width', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '25%' },
		// { Property: 'Thickness', Header: 'Thickness', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '25%' },
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '25%' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
	],

	CuttingPatternPanelsColumns: [
		{ Property: '', Header: 'Panel List' },
		{ Property: 'itemName', Header: 'itemName', HozAlign: 'center', Width: '10%' },
		{ Property: 'Name', Header: 'Name', HozAlign: 'center', Width: 'auto' },
	],

	/*	========================================
					Hardware Page
		======================================== */

	HardwareDefaultGroup: 0,
	NoParentTitleHardware: 'No Parent',
	NoTypeTitleHardware: 'Hardware',

	HardwareColumns: [
		{ Property: 'PDFRelativePath', Header: '', formatter: 'PDF', Search: false, Print: false, HozAlign: 'center', Width: '40' },
		{ Property: 'Image', Header: '', Type: 'image', Search: false, Print: true, HozAlign: 'center', Width: '100' },
		{ Property: 'Name', Header: 'Name', Type: 'alphanum', Search: true, Print: true, HozAlign: 'left', Width: 'auto', Link: false },
		{ Property: 'Description', Header: 'Description', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Configuration', Header: 'Configuration', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: '300' },
		{ Property: 'Reference', Header: 'Reference', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Supplier', Header: 'Supplier', Type: 'alphanum', Search: true, Print: true, HozAlign: 'center', Width: 'auto' },
		{ Property: 'Quantity', Header: 'Qty', Type: 'number', Search: true, Print: true, HozAlign: 'center', Width: '100' },
		{ Property: 'UnitCost', Header: 'Unit Cost', Type: 'currency', Search: true, Print: true, HozAlign: 'center', Width: '200' },
	],

	SortByHardware: [
		{ Property: 'UnitCost', Type: -1 },
		{ Property: 'Quantity', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Description', Type: 1 },
		{ Property: 'Configuration', Type: 1 },
		{ Property: 'Length', Type: 1 },
	],

	/*	========================================
					Summary Page
		======================================== */

	ShowMachiningCosts: false,
	GroupPanelMachiningCosts: true,
	GroupSheetMachiningCosts: true,
	ShowSummaryChart: true,
	ShowSummaryCuttingPatternTable: true,
	PrintSummaryChart: true,

	SummaryColumns: [
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Width: 'auto' },
		{ Property: 'MaterialDescription', Header: 'Description', Type: 'alphanum', Width: '20%' },
		{ Property: 'MaterialThickness', Header: 'Thickness', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialQuantity', Header: 'Quantity', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialUnitCost', Header: 'Unit Cost', Type: 'alphanum', Width: '14%' },
		{ Property: 'TotalCost', Header: 'Total Cost', Type: 'alphanum', Width: '12%' },
	],

	SummaryWeldmentColumns: [
		{ Property: 'Material', Header: 'Material', Type: 'alphanum', Width: 'auto' },
		{ Property: 'MaterialDescription', Header: 'Description', Type: 'alphanum', Width: '32%' },
		// { Property: 'MaterialThickness', Header: 'Thickness', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialQuantity', Header: 'Quantity', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialUnitCost', Header: 'Unit Cost', Type: 'alphanum', Width: '14%' },
		{ Property: 'TotalCost', Header: 'Total Cost', Type: 'alphanum', Width: '12%' },
	],

	SummaryPaintColumns: [
		{ Property: 'Material', Header: 'Paint', Type: 'alphanum', Width: 'auto' },
		{ Property: 'MaterialDescription', Header: 'Description', Type: 'alphanum', Width: '32%' },
		// { Property: 'MaterialThickness', Header: 'Thickness', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialQuantity', Header: 'Quantity', Type: 'alphanum', Width: '12%' },
		{ Property: 'MaterialUnitCost', Header: 'Unit Cost', Type: 'alphanum', Width: '14%' },
		{ Property: 'TotalCost', Header: 'Total Cost', Type: 'alphanum', Width: '12%' },
	],

	// SummarySortBy also used to sort Weldments
	SummarySortBy: [
		{ Property: 'TotalCost', Type: -1 },
		{ Property: 'UnitCost', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Description', Type: 1 },
		{ Property: 'MaterialThickness', Type: 1 },
		{ Property: 'MaterialQty', Type: 1 },
	],

	SummaryHardwareColumns: [
		{ Property: 'Name', Header: 'Name', Width: 'auto' },
		{ Property: 'Configuration', Header: 'Configuration', Width: '20%' },
		// { Property: 'Supplier', Header: 'Supplier', Width: 'auto' },
		{ Property: 'Reference', Header: 'Reference', Width: '12%' },
		{ Property: 'Quantity', Header: 'Quantity', Width: '12%' },
		{ Property: 'UnitCost', Header: 'Unit Cost', Width: '14%' },
		{ Property: 'TotalCost', Header: 'Total Cost', Width: '12%' },
	],

	SummaryHardwareSortBy: [
		{ Property: 'TotalCost', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Description', Type: 1 },
		{ Property: 'Configuration', Type: 1 },
		{ Property: 'UnitCost', Type: -1 },
		{ Property: 'Quantity', Type: -1 },
		{ Property: 'Length', Type: 1 },
	],

	SummaryPanelProcessColumns: [
		{ Property: 'Name', Header: 'Name', Width: 'auto' },
		{ Property: 'Quantity', Header: 'Quantity', Width: '12%' },
		{ Property: 'UnitCost', Header: 'Unit Cost', Type: 'currency', Width: '14%' },
		{ Property: 'TotalCost', Header: 'Total Cost', Type: 'currency', Width: '12%' },
	],

	SummaryLabourCostsColumns: [
		{ Property: 'Name', Header: 'Name', Width: 'auto' },
		{ Property: 'LabourCosts', Header: 'Cost', Type: 'currency', Width: '12%' },
	],

	SummaryMachiningCostsColumns: [
		{ Property: 'Name', Header: 'Name', Width: 'auto' },
		{ Property: 'Time', Header: 'Time', Width: '12%' },
		{ Property: 'Quantity', Header: 'Quantity', Width: '12%' },
		{ Property: 'HourCost', Header: 'Hourly Cost', Type: 'currency', Width: '14%' },
		{ Property: 'ProgramCost', Header: 'Cost', Type: 'currency', Width: '12%' },
	],

	SummaryMachiningCostsSortBy: [
		{ Property: 'ProgramCost', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Description', Type: 1 },
		{ Property: 'Configuration', Type: 1 },
		{ Property: 'UnitCost', Type: -1 },
		{ Property: 'Quantity', Type: -1 },
		{ Property: 'Length', Type: 1 },
	],

	/*	========================================
					Labels Page
		======================================== */

	ExcludePanelLabels: false,
	ExcludeOffcutLabels: true,

	LabelData: [
		{ Property: 'ProgramIndicator', GridLocation: { xs: 1, xe: 2, ys: 1, ye: 2 } },
		{ Property: 'SWPanelID', GridLocation: { xs: 2, xe: 4, ys: 1, ye: 2 } },
		{ Property: 'Name', Style: 'font-weight: bold;', GridLocation: { xs: 4, xe: 13, ys: 1, ye: 2 } },
		{ Property: 'Image', GridLocation: { xs: 7, xe: 13, ys: 2, ye: 6 } },
		{ Property: 'Description', GridLocation: { xs: 1, xe: 7, ys: 2, ye: 3 } },
		{ Property: 'Material', GridLocation: { xs: 1, xe: 7, ys: 3, ye: 4 } },
		{ Property: 'PanelDimensions', GridLocation: { xs: 1, xe: 7, ys: 4, ye: 5 } },
		{ Property: 'LabelQuantity', GridLocation: { xs: 1, xe: 7, ys: 5, ye: 6 } },
	],

	// Not applicable to nesting labels
	SortByLabel: [
		{ Property: 'Thickness', Type: -1 },
		{ Property: 'Material', Type: 1 },
		{ Property: 'Length', Type: -1 },
		{ Property: 'Width', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Labels Page Nesting
		======================================== */

	ExcludeNestedPanelLabels: false,
	ExcludeOffcutLabels: true,

	LabelDataNest: [],

	/*	========================================
					Labels Page BeamSaw
		======================================== */

	LabelDataBeamSaw: [],

	SortByLabelBeamSaw: [],

	/*	========================================
					Labels Page Frame
		======================================== */

	LabelDataFrames: [
		{ Property: 'Name', GridLocation: { xs: 3, xe: 13, ys: 1, ye: 2 } },
		{ Property: 'Image', GridLocation: { xs: 7, xe: 13, ys: 2, ye: 5 } },
		{ Property: 'Description', GridLocation: { xs: 1, xe: 7, ys: 2, ye: 3 } },
		{ Property: 'CompanyLogoLabel', GridLocation: { xs: 1, xe: 3, ys: 1, ye: 2 } },
		{ Property: 'FrameDimensions', GridLocation: { xs: 1, xe: 7, ys: 3, ye: 4 } },
		{ Property: 'LabelQuantity', GridLocation: { xs: 1, xe: 7, ys: 4, ye: 5 } },
	],

	SortByLabelFrame: [
		{ Property: 'Heigh', Type: -1 },
		{ Property: 'Width', Type: 1 },
		{ Property: 'Depth', Type: -1 },
		{ Property: 'Name', Type: 1 },
		{ Property: 'Quantity', Type: 1 },
	],

	/*	========================================
					Print Settings
		======================================== */

	PrintHeader: true,
	PrintCompanyLogo: true,

	PrintList: [
		{ Page: 'Home' },
		{ Page: 'Frames' },
		// { Page: 'Frame Details' },
		{ Page: 'Panels', Group: 0 },
		// { Page: 'Panel Details' },
		// { Page: 'Panel Detailed List' },
		{ Page: 'Weldments' },
		{ Page: 'Stocks' },
		{ Page: 'Beam Saw' },
		{ Page: 'Edgebands' },
		{ Page: 'Laminates' },
		{ Page: 'Programs' },
		// { Page: 'Program Detailed List' },
		// { Page: 'Program Details' },
		{ Page: 'Sheets', Group: 0 },
		// { Page: 'Sheet Details' },
		// { Page: 'Sheet Detailed List' },
		{ Page: 'Cutting Pattern', Group: 0 },
		{ Page: 'Nested Panels', Group: 0 },
		{ Page: 'Tool List' },
		{ Page: 'Hardware' },
		{ Page: 'Summary' },
	],
}

try {
	module.exports = { ReportSettings }
} catch {}
