$wnd.hal.runAsyncCallback3("function $clinit_GroupColumn(){\n  $clinit_GroupColumn = emptyMethod;\n  $clinit_PrincipalColumn();\n}\n\nfunction GroupColumn(finder, columnActionFactory, dispatcher, eventBus, progress, currentUser, accessControl, tokens, accessControlResources, resources){\n  $clinit_GroupColumn();\n  PrincipalColumn.call(this, finder, 'group', resources.constants_0().group_1(), ($clinit_Principal$Type() , GROUP), columnActionFactory, dispatcher, eventBus, progress, currentUser, accessControl, tokens, accessControlResources, resources);\n  this.$init_879();\n}\n\ndefineClass(5189, 1043, {1:1, 7:1, 8:1, 33:1}, GroupColumn);\n_.$init_879 = function $init_879(){\n}\n;\nvar Lorg_jboss_hal_client_accesscontrol_GroupColumn_2_classLit = createForClass('org.jboss.hal.client.accesscontrol', 'GroupColumn', 5189, Lorg_jboss_hal_client_accesscontrol_PrincipalColumn_2_classLit);\ndefineClass(1817, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$accesscontrol$GroupColumn_org$jboss$hal$client$accesscontrol$GroupColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ColumnActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_flow().get_Key$type$com$google$inject$Provider$org$jboss$hal$flow$Progress$$_annotation$$org$jboss$hal$spi$Footer$(), this.injector.getFragment_org_jboss_hal_config().get_Key$type$org$jboss$hal$config$User$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$accesscontrol$AccessControl$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$accesscontrol$AccessControlTokens$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$accesscontrol$AccessControlResources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$accesscontrol$GroupColumn_org$jboss$hal$client$accesscontrol$GroupColumn_methodInjection = function org$jboss$hal$client$accesscontrol$GroupColumn_org$jboss$hal$client$accesscontrol$GroupColumn_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9){\n  return new GroupColumn(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9);\n}\n;\ndefineClass(1824, 1, {41:1, 1:1});\n_.onSuccess_2 = function onSuccess_22(){\n  this.val$callback2.onSuccess_1(this.this$11.this$01.get_Key$type$org$jboss$hal$client$accesscontrol$GroupColumn$_annotation$$none$$());\n}\n;\n$entry(onLoad_1)(3);\n\n//# sourceURL=hal-3.js\n")