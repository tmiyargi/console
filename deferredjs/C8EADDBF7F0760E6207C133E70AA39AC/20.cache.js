$wnd.hal.runAsyncCallback20("defineClass(1810, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_ElytronSubsystemPresenter(){\n  $clinit_ElytronSubsystemPresenter = emptyMethod;\n  $clinit_MbuiPresenter();\n}\n\nfunction ElytronSubsystemPresenter(eventBus, view, proxy, finder, crud, finderPathFactory, statementContext, resources){\n  $clinit_ElytronSubsystemPresenter();\n  MbuiPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1089();\n  this.crud_0 = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext_0 = statementContext;\n  this.resources = resources;\n}\n\ndefineClass(2205, 73, {53:1, 46:1, 1:1, 26:1, 7:1, 73:1, 92:1, 77:1}, ElytronSubsystemPresenter);\n_.$init_1089 = function $init_1089(){\n}\n;\n_.lambda$0_77 = function lambda$0_145(result_0){\n  $clinit_ElytronSubsystemPresenter();\n  castTo(this.getView(), 1104).update_13(result_0);\n}\n;\n_.finderPath = function finderPath_9(){\n  return this.finderPathFactory.configurationSubsystemPath('elytron').append_22('elytron', 'elytron', this.resources.constants_0().settings_4(), this.resources.constants_0().globalSettings());\n}\n;\n_.onBind = function onBind_12(){\n  getClassPrototype(74).onBind.call(this);\n  castTo(this.getView(), 1104).setPresenter(this);\n}\n;\n_.reload_0 = function reload_13(){\n  this.crud_0.read_6(($clinit_AddressTemplates_5() , ELYTRON_SUBSYSTEM_TEMPLATE), makeLambdaFunction(ElytronSubsystemPresenter$lambda$0$Type.prototype.execute_10, ElytronSubsystemPresenter$lambda$0$Type, [this]));\n}\n;\n_.resourceAddress = function resourceAddress_7(){\n  return ($clinit_AddressTemplates_5() , ELYTRON_SUBSYSTEM_TEMPLATE).resolve(this.statementContext_0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_elytron_ElytronSubsystemPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.elytron', 'ElytronSubsystemPresenter', 2205, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_ElytronSubsystemPresenter$MyView(){\n  $clinit_ElytronSubsystemPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_elytron_ElytronSubsystemPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.elytron', 'ElytronSubsystemPresenter/MyView');\nfunction $clinit_ElytronSubsystemPresenter$lambda$0$Type(){\n  $clinit_ElytronSubsystemPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction ElytronSubsystemPresenter$lambda$0$Type($$outer_0){\n  $clinit_ElytronSubsystemPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(7781, $wnd.Function, {1:1}, ElytronSubsystemPresenter$lambda$0$Type);\n_.execute_10 = function execute_140(arg0){\n  this.$$outer_0.lambda$0_77(arg0);\n}\n;\nfunction $clinit_ElytronSubsystemView(){\n  $clinit_ElytronSubsystemView = emptyMethod;\n  $clinit_MbuiViewImpl();\n  $clinit_HalView();\n}\n\nfunction ElytronSubsystemView(mbuiContext){\n  $clinit_ElytronSubsystemView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_1093();\n}\n\ndefineClass(3132, 125, {1:1, 26:1, 7:1, 1104:1, 40:1});\n_.$init_1093 = function $init_1093(){\n}\n;\n_.update_13 = function update_36(modelNode){\n  this.form_0.view(modelNode);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_elytron_ElytronSubsystemView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.elytron', 'ElytronSubsystemView', 3132, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_ElytronSubsystemView(){\n  $clinit_Mbui_ElytronSubsystemView = emptyMethod;\n  $clinit_ElytronSubsystemView();\n}\n\nfunction Mbui_ElytronSubsystemView(mbuiContext){\n  $clinit_Mbui_ElytronSubsystemView();\n  var html23, metadata8Template, root;\n  ElytronSubsystemView.call(this, mbuiContext);\n  this.$init_1106();\n  metadata8Template = of_31('/{selected.profile}/subsystem=elytron');\n  this.metadata8 = mbuiContext.metadataRegistry_2().lookup_3(metadata8Template);\n  this.expressionElements = new HashMap;\n  this.form_0 = (new ModelNodeForm$Builder('elytron-global-settings-form', this.metadata8)).onSave_2(new Mbui_ElytronSubsystemView$lambda$0$Type(this, metadata8Template, mbuiContext)).build();\n  root = castTo(row_4().add_18(castTo(castTo(column_7().add_16(html23 = castTo(div_2().innerHtml(fromSafeConstant('<h1>Elytron Configuration<\\/h1><p>${metadata8.getDescription().getDescription()}<\\/p>')), 5).asElement_0()), 5).add_18(this.form_0), 7)), 5).asElement_0();\n  this.expressionElements.put('html23', html23);\n  this.registerAttachable(this.form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, []));\n  this.initElement(root);\n}\n\ndefineClass(3133, 3132, {1:1, 26:1, 7:1, 1104:1, 40:1}, Mbui_ElytronSubsystemView);\n_.$init_1106 = function $init_1106(){\n}\n;\n_.lambda$0_85 = function lambda$0_154(metadata8Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ElytronSubsystemView();\n  this.saveSingletonForm('Elytron Configuration', metadata8Template_1.resolve(mbuiContext_2.statementContext_6()), changedValues_3, this.metadata8);\n}\n;\n_.attach_0 = function attach_40(){\n  getClassPrototype(51).attach_0.call(this);\n  replaceExpression(castToNative(this.expressionElements.get('html23'), $wnd.HTMLElement), '${metadata8.getDescription().getDescription()}', valueOf_31(this.metadata8.description.description));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_elytron_Mbui_1ElytronSubsystemView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.elytron', 'Mbui_ElytronSubsystemView', 3133, Lorg_jboss_hal_client_configuration_subsystem_elytron_ElytronSubsystemView_2_classLit);\nfunction $clinit_Mbui_ElytronSubsystemView$lambda$0$Type(){\n  $clinit_Mbui_ElytronSubsystemView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_ElytronSubsystemView$lambda$0$Type($$outer_0, metadata8Template_1, mbuiContext_2){\n  $clinit_Mbui_ElytronSubsystemView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata8Template_1 = metadata8Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(3134, 1, {1:1}, Mbui_ElytronSubsystemView$lambda$0$Type);\n_.onSave_0 = function onSave_46(arg0, arg1){\n  this.$$outer_0.lambda$0_85(this.metadata8Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_elytron_Mbui_1ElytronSubsystemView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.elytron', 'Mbui_ElytronSubsystemView/lambda$0$Type', 3134, Ljava_lang_Object_2_classLit);\ndefineClass(1867, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new ElytronSubsystemPresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_methodInjection = function org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_org$jboss$hal$client$configuration$subsystem$elytron$Mbui_ElytronSubsystemView_methodInjection(_0){\n  return new Mbui_ElytronSubsystemView(_0);\n}\n;\ndefineClass(1869, 1, {41:1, 1:1});\n_.onSuccess_2 = function onSuccess_53(){\n  this.val$callback2.onSuccess_1(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$elytron$ElytronSubsystemPresenter$_annotation$$none$$());\n}\n;\n$entry(onLoad_1)(20);\n\n//# sourceURL=hal-20.js\n")