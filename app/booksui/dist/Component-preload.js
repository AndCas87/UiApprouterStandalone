//@ui5-bundle book/booksui/Component-preload.js
sap.ui.require.preload({
	"book/booksui/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","book/booksui/model/models"],(e,t)=>{"use strict";return e.extend("book.booksui.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"book/booksui/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],o=>{"use strict";return o.extend("book.booksui.controller.App",{onInit(){}})});
},
	"book/booksui/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("book.booksui.controller.View1",{onInit(){}})});
},
	"book/booksui/i18n/i18n.properties":'# This is the resource bundle for book.booksui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"book/booksui/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"book.booksui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.16.4","toolsId":"78e5ec0f-f95d-4605-b88c-f10014aee0bc"},"dataSources":{"srvBFF":{"uri":"dest_int/odata/v4/CatalogService/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.133.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"book.booksui.i18n.i18n"}},"modelBooks":{"dataSource":"srvBFF","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"book.booksui.view"},"routes":[{"name":"RouteView1","pattern":"","target":["TargetView1"]}],"targets":{"TargetView1":{"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"book.booksui.view.App","type":"XML","id":"App"}}}',
	"book/booksui/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"book/booksui/view/App.view.xml":'<mvc:View controllerName="book.booksui.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"book/booksui/view/View1.view.xml":'<mvc:View controllerName="book.booksui.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Table id="idTable" items="{modelBooks>/Books}"><headerToolbar><OverflowToolbar><content><ToolbarSpacer/><Button id="idCreate" \n                            text="Create"\n                            press="onNavToCreate" /></content></OverflowToolbar></headerToolbar><columns><Column ><Text text="Title" /></Column><Column ><Text text="Descrptioin" /></Column></columns><items ><ColumnListItem vAlign="Middle" type="Navigation" press="onSelRow"><cells><Text text="{modelBooks>title}"/><Text text="{modelBooks>ID}"/></cells></ColumnListItem></items></Table></content></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
