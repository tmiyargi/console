$wnd.hal.runAsyncCallback108("function $clinit_ApplicationSecurityDomainColumn_0(){\n  $clinit_ApplicationSecurityDomainColumn_0 = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction ApplicationSecurityDomainColumn_0(finder, columnActionFactory, dispatcher, statementContext){\n  $clinit_ApplicationSecurityDomainColumn_0();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'undertow-runtime-app-sec-domain', 'Application Security Domain')).columnAction(columnActionFactory.refresh_12('undertow-application-security-domain-refresh')).itemsProvider_0(new ApplicationSecurityDomainColumn$lambda$0$Type_0(statementContext, dispatcher)).itemRenderer_0(new ApplicationSecurityDomainColumn$lambda$1$Type_0).onPreview_0(new ApplicationSecurityDomainColumn$0methodref$ctor$Type));\n  this.$init_2007();\n}\n\nfunction lambda$0_434(statementContext_0, dispatcher_1, context_2, callback_3){\n  $clinit_ApplicationSecurityDomainColumn_0();\n  var address, operation;\n  {\n    address = ($clinit_AddressTemplates_28() , WEB_SUBSYSTEM_TEMPLATE).resolve(statementContext_0);\n    operation = (new Operation$Builder(address, 'read-children-resources')).param_1('child-type', 'application-security-domain').param_3('include-runtime', true).build();\n    dispatcher_1.execute_20(operation, new ApplicationSecurityDomainColumn$lambda$2$Type_0(callback_3));\n  }\n}\n\nfunction lambda$1_319(item_0){\n  $clinit_ApplicationSecurityDomainColumn_0();\n  return new ApplicationSecurityDomainColumn$1_0(item_0);\n}\n\nfunction lambda$2_261(callback_0, result_1){\n  $clinit_ApplicationSecurityDomainColumn_0();\n  callback_0.onSuccess_1(asNamedNodes(result_1.asPropertyList()));\n}\n\ndefineClass(5093, 33, {1:1, 7:1, 8:1, 33:1}, ApplicationSecurityDomainColumn_0);\n_.$init_2007 = function $init_2007(){\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn', 5093, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_ApplicationSecurityDomainColumn$0methodref$ctor$Type(){\n  $clinit_ApplicationSecurityDomainColumn$0methodref$ctor$Type = emptyMethod;\n}\n\nfunction ApplicationSecurityDomainColumn$0methodref$ctor$Type(){\n  $clinit_ApplicationSecurityDomainColumn$0methodref$ctor$Type();\n}\n\ndefineClass(5098, 1, {1:1}, ApplicationSecurityDomainColumn$0methodref$ctor$Type);\n_.onPreview = function onPreview_45(arg0){\n  return new ApplicationSecurityDomainPreview_0(castTo(arg0, 13));\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn$0methodref$ctor$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn/0methodref$ctor$Type', 5098, Ljava_lang_Object_2_classLit);\nfunction $clinit_ApplicationSecurityDomainColumn$1_0(){\n  $clinit_ApplicationSecurityDomainColumn$1_0 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction ApplicationSecurityDomainColumn$1_0(val$item){\n  $clinit_ApplicationSecurityDomainColumn$1_0();\n  this.val$item1 = val$item;\n  Object_0.call(this);\n  this.$init_2008();\n}\n\ndefineClass(5096, 1, {1:1, 7:1}, ApplicationSecurityDomainColumn$1_0);\n_.$init_2008 = function $init_2008(){\n}\n;\n_.actions_1 = function actions_47(){\n  return $actions_0(this);\n}\n;\n_.asElement_0 = function asElement_133(){\n  return $asElement_0(this);\n}\n;\n_.getFilterData = function getFilterData_42(){\n  return $getFilterData(this);\n}\n;\n_.getIcon = function getIcon_42(){\n  return $getIcon(this);\n}\n;\n_.getTooltip = function getTooltip_42(){\n  return $getTooltip(this);\n}\n;\n_.nextColumn_0 = function nextColumn_43(){\n  return $nextColumn(this);\n}\n;\n_.getId = function getId_54(){\n  return asId(this.val$item1.name);\n}\n;\n_.getTitle = function getTitle_47(){\n  return this.val$item1.name;\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn$1_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn/1', 5096, Ljava_lang_Object_2_classLit);\nfunction $clinit_ApplicationSecurityDomainColumn$lambda$0$Type_0(){\n  $clinit_ApplicationSecurityDomainColumn$lambda$0$Type_0 = emptyMethod;\n}\n\nfunction ApplicationSecurityDomainColumn$lambda$0$Type_0(statementContext_0, dispatcher_1){\n  $clinit_ApplicationSecurityDomainColumn$lambda$0$Type_0();\n  this.statementContext_0 = statementContext_0;\n  this.dispatcher_1 = dispatcher_1;\n}\n\ndefineClass(5095, 1, {1:1}, ApplicationSecurityDomainColumn$lambda$0$Type_0);\n_.get_17 = function get_470(arg0, arg1){\n  lambda$0_434(this.statementContext_0, this.dispatcher_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn/lambda$0$Type', 5095, Ljava_lang_Object_2_classLit);\nfunction $clinit_ApplicationSecurityDomainColumn$lambda$1$Type_0(){\n  $clinit_ApplicationSecurityDomainColumn$lambda$1$Type_0 = emptyMethod;\n}\n\nfunction ApplicationSecurityDomainColumn$lambda$1$Type_0(){\n  $clinit_ApplicationSecurityDomainColumn$lambda$1$Type_0();\n}\n\ndefineClass(5097, 1, {1:1}, ApplicationSecurityDomainColumn$lambda$1$Type_0);\n_.render_3 = function render_211(arg0){\n  return lambda$1_319(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn/lambda$1$Type', 5097, Ljava_lang_Object_2_classLit);\nfunction $clinit_ApplicationSecurityDomainColumn$lambda$2$Type_0(){\n  $clinit_ApplicationSecurityDomainColumn$lambda$2$Type_0 = emptyMethod;\n}\n\nfunction ApplicationSecurityDomainColumn$lambda$2$Type_0(callback_0){\n  $clinit_ApplicationSecurityDomainColumn$lambda$2$Type_0();\n  this.callback_0 = callback_0;\n}\n\ndefineClass(5094, 1, {1:1, 10:1}, ApplicationSecurityDomainColumn$lambda$2$Type_0);\n_.accept_0 = function accept_457(arg0){\n  lambda$2_261(this.callback_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainColumn$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainColumn/lambda$2$Type', 5094, Ljava_lang_Object_2_classLit);\nfunction $clinit_ApplicationSecurityDomainPreview_0(){\n  $clinit_ApplicationSecurityDomainPreview_0 = emptyMethod;\n  $clinit_PreviewContent();\n}\n\nfunction ApplicationSecurityDomainPreview_0(server){\n  $clinit_ApplicationSecurityDomainPreview_0();\n  PreviewContent.call(this, server.name);\n  this.$init_2009();\n  this.previewBuilder().addAll_3(new PreviewAttributes_3(server, singletonList('referencing-deployments')));\n}\n\ndefineClass(5617, 29, {1:1, 8:1, 29:1}, ApplicationSecurityDomainPreview_0);\n_.$init_2009 = function $init_2009(){\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_undertow_ApplicationSecurityDomainPreview_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.undertow', 'ApplicationSecurityDomainPreview', 5617, Lorg_jboss_hal_core_finder_PreviewContent_2_classLit);\ndefineClass(2099, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ColumnActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_methodInjection = function org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn_methodInjection(_0, _1, _2, _3){\n  return new ApplicationSecurityDomainColumn_0(_0, _1, _2, _3);\n}\n;\ndefineClass(2103, 1, {41:1, 1:1});\n_.onSuccess_2 = function onSuccess_230(){\n  this.val$callback2.onSuccess_1(this.this$11.this$01.get_Key$type$org$jboss$hal$client$runtime$subsystem$undertow$ApplicationSecurityDomainColumn$_annotation$$none$$());\n}\n;\n$entry(onLoad_1)(108);\n\n//# sourceURL=hal-108.js\n")