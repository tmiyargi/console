/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.configuration.subsystem.logging;

import java.util.List;
import java.util.Map;
import javax.inject.Inject;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import org.jboss.hal.client.configuration.subsystem.ee.AddressTemplates;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.FinderPath;
import org.jboss.hal.core.mvp.HasPresenter;
import org.jboss.hal.core.mvp.HasVerticalNavigation;
import org.jboss.hal.core.mvp.PatternFlyView;
import org.jboss.hal.core.mvp.SubsystemPresenter;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.dmr.model.Composite;
import org.jboss.hal.dmr.model.CompositeResult;
import org.jboss.hal.dmr.model.NamedNode;
import org.jboss.hal.dmr.model.Operation;
import org.jboss.hal.dmr.model.OperationFactory;
import org.jboss.hal.dmr.model.ResourceAddress;
import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.StatementContext;
import org.jboss.hal.meta.token.NameTokens;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.Message;
import org.jboss.hal.spi.MessageEvent;
import org.jboss.hal.spi.Requires;

import static org.jboss.hal.client.configuration.subsystem.logging.AddressTemplates.*;
import static org.jboss.hal.dmr.ModelDescriptionConstants.READ_RESOURCE_OPERATION;
import static org.jboss.hal.dmr.ModelDescriptionConstants.RECURSIVE_DEPTH;

/**
 * @author Harald Pehl
 */
public class LoggingPresenter extends SubsystemPresenter<LoggingPresenter.MyView, LoggingPresenter.MyProxy> {

    // @formatter:off
    @ProxyCodeSplit
    @NameToken(NameTokens.LOGGING)
    @Requires({ROOT_LOGGER_ADDRESS, LOGGER_ADDRESS,
            ASYNC_HANDLER_ADDRESS, CONSOLE_HANDLER_ADDRESS, CUSTOM_HANDLER_ADDRESS, FILE_HANDLER_ADDRESS,
            PERIODIC_ROTATING_FILE_HANDLER_ADDRESS, PERIODIC_SIZE_ROTATING_FILE_HANDLER_ADDRESS,
            SIZE_ROTATING_FILE_HANDLER_ADDRESS, SYSLOG_HANDLER_ADDRESS,
            CUSTOM_FORMATTER_ADDRESS, PATTERN_FORMATTER_ADDRESS})
    public interface MyProxy extends ProxyPlace<LoggingPresenter> {}

    public interface MyView extends PatternFlyView, HasVerticalNavigation, HasPresenter<LoggingPresenter> {
        void updateRootLogger(ModelNode modelNode);
        void updateLogger(List<NamedNode> items);

        void updateAsyncHandler(List<NamedNode> items);
        void updateConsoleHandler(List<NamedNode> items);
        void updateCustomHandler(List<NamedNode> items);
        void updateFileHandler(List<NamedNode> items);
        void updatePeriodicHandler(List<NamedNode> items);
        void updatePeriodicSizeHandler(List<NamedNode> items);
        void updateSizeHandlerHandler(List<NamedNode> items);
        void updateSyslogHandler(List<NamedNode> items);

        void updateCustomFormatter(List<NamedNode> items);
        void updatePatternFormatter(List<NamedNode> items);
    }
    // @formatter:on


    private final StatementContext statementContext;
    private final Dispatcher dispatcher;
    private final OperationFactory operationFactory;
    private final Resources resources;

    @Inject
    public LoggingPresenter(final EventBus eventBus,
            final MyView view,
            final MyProxy proxy,
            final Finder finder,
            final StatementContext statementContext,
            final Dispatcher dispatcher,
            final OperationFactory operationFactory,
            final Resources resources) {
        super(eventBus, view, proxy, finder);
        this.statementContext = statementContext;
        this.dispatcher = dispatcher;
        this.operationFactory = operationFactory;
        this.resources = resources;
    }

    @Override
    protected void onBind() {
        super.onBind();
        getView().setPresenter(this);
    }

    @Override
    protected void onReset() {
        super.onReset();
        loadData();
    }

    @Override
    protected FinderPath finderPath() {
        return FinderPath
                .subsystemPath(statementContext.selectedProfile(), AddressTemplates.EE_SUBSYSTEM_TEMPLATE.lastValue());
    }

    private void loadData() {
        Operation operation = new Operation.Builder(READ_RESOURCE_OPERATION,
                LOGGING_SUBSYSTEM_TEMPLATE.resolve(statementContext))
                .param(RECURSIVE_DEPTH, 2)
                .build();
        dispatcher.execute(operation, result -> {
            // @formatter:off
            // getView().updateRootLogger(result.get(ROOT_LOGGER_TEMPLATE.lastKey()).get(ROOT_LOGGER_TEMPLATE.lastValue()));
            // getView().updateLogger(asNamedNodes(result.get(LOGGER_TEMPLATE.lastKey()).asPropertyList()));
            //
            // getView().updateAsyncHandler(asNamedNodes(result.get(ASYNC_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updateConsoleHandler(asNamedNodes(result.get(CONSOLE_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updateCustomHandler(asNamedNodes(result.get(CUSTOM_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updateFileHandler(asNamedNodes(result.get(FILE_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updatePeriodicHandler(asNamedNodes(result.get(PERIODIC_ROTATING_FILE_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updatePeriodicSizeHandler(asNamedNodes(result.get(PERIODIC_SIZE_ROTATING_FILE_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updateSizeHandlerHandler(asNamedNodes(result.get(SIZE_ROTATING_FILE_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updateSyslogHandler(asNamedNodes(result.get(SYSLOG_HANDLER_TEMPLATE.lastKey()).asPropertyList()));
            //
            // getView().updateCustomFormatter(asNamedNodes(result.get(CUSTOM_FORMATTER_TEMPLATE.lastKey()).asPropertyList()));
            // getView().updatePatternFormatter(asNamedNodes(result.get(PATTERN_FORMATTER_TEMPLATE.lastKey()).asPropertyList()));
            // @formatter:on
        });
    }

    void saveResource(AddressTemplate template, String type, String name, Map<String, Object> changedValues) {
        ResourceAddress address = template.resolve(statementContext, name);
        Composite composite = operationFactory.fromChangeSet(address, changedValues);
        dispatcher.execute(composite, (CompositeResult result) -> {
            if (name == null) {
                MessageEvent
                        .fire(getEventBus(), Message.success(resources.messages().modifySingleResourceSuccess(type)));
            } else {
                MessageEvent
                        .fire(getEventBus(), Message.success(resources.messages().modifyResourceSuccess(type, name)));
            }
        });
    }
}