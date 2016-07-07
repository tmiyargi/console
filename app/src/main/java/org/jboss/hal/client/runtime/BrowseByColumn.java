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
package org.jboss.hal.client.runtime;

import java.util.Arrays;
import javax.inject.Inject;
import javax.inject.Provider;

import com.google.web.bindery.event.shared.EventBus;
import org.jboss.gwt.flow.Progress;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.runtime.group.ServerGroupActions;
import org.jboss.hal.core.runtime.host.HostActions;
import org.jboss.hal.core.runtime.server.ServerActions;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.PreviewContent;
import org.jboss.hal.core.finder.StaticItem;
import org.jboss.hal.core.finder.StaticItemColumn;
import org.jboss.hal.dmr.ModelDescriptionConstants;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Names;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.Column;
import org.jboss.hal.spi.Footer;

/**
 * @author Harald Pehl
 */
@Column(Ids.DOMAIN_BROWSE_BY_COLUMN)
public class BrowseByColumn extends StaticItemColumn {

    @Inject
    public BrowseByColumn(final Finder finder,
            final Environment environment,
            final @Footer Provider<Progress> progress,
            final EventBus eventBus,
            final Dispatcher dispatcher,
            final HostActions hostActions,
            final ServerGroupActions serverGroupActions,
            final ServerActions serverActions,
            final Resources resources) {
        super(finder, Ids.DOMAIN_BROWSE_BY_COLUMN, resources.constants().browseBy(),
                Arrays.asList(
                        new StaticItem.Builder(Names.TOPOLOGY)
                                .onPreview(
                                        new TopologyPreview(environment, dispatcher, progress, eventBus,
                                                hostActions, serverGroupActions, serverActions, resources))
                                .build(),
                        new StaticItem.Builder(Names.HOSTS)
                                .nextColumn(ModelDescriptionConstants.HOST)
                                .onPreview(new PreviewContent(Names.HOSTS, resources.previews().hosts()))
                                .build(),
                        new StaticItem.Builder(Names.SERVER_GROUPS)
                                .nextColumn(ModelDescriptionConstants.SERVER_GROUP)
                                .onPreview(new PreviewContent(Names.SERVER_GROUPS,
                                        resources.previews().runtimeServerGroups()))
                                .build()
                ));
    }
}