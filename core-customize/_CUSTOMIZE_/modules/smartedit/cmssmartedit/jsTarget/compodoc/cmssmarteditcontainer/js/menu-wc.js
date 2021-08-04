'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/SAP_scrn_R.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CmssmarteditContainerModule.html" data-type="entity-link">CmssmarteditContainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' : 'data-target="#xs-components-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' :
                                            'id="xs-components-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' }>
                                            <li class="link">
                                                <a href="components/GenericEditorModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenericEditorModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' : 'data-target="#xs-injectables-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' :
                                        'id="xs-injectables-links-module-CmssmarteditContainerModule-4b7c485f9af708eb7058db0c572af7a7"' }>
                                        <li class="link">
                                            <a href="injectables/CatalogVersionRestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CatalogVersionRestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenericEditorModalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GenericEditorModalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageRestrictionsRestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PageRestrictionsRestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageTypesRestrictionTypesRestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PageTypesRestrictionTypesRestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageTypesRestrictionTypesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PageTypesRestrictionTypesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductCategoryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductCategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestrictionTypesRestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestrictionTypesRestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestrictionTypesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestrictionTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ClonePageWizardController.html" data-type="entity-link">ClonePageWizardController</a>
                            </li>
                            <li class="link">
                                <a href="classes/CmssmarteditContainer.html" data-type="entity-link">CmssmarteditContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageContentSlotsComponentsRestService.html" data-type="entity-link">PageContentSlotsComponentsRestService</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkflowModule.html" data-type="entity-link">WorkflowModule</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CatalogVersionRestService.html" data-type="entity-link">CatalogVersionRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageRestrictionsRestService.html" data-type="entity-link">PageRestrictionsRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageTypesRestrictionTypesRestService.html" data-type="entity-link">PageTypesRestrictionTypesRestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/GenericEditorModalComponentControls.html" data-type="entity-link">GenericEditorModalComponentControls</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenericEditorUnrelatedErrorEvent.html" data-type="entity-link">GenericEditorUnrelatedErrorEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IClonePageBuilder.html" data-type="entity-link">IClonePageBuilder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSPageRestriction.html" data-type="entity-link">ICMSPageRestriction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSPageTypeRestriction.html" data-type="entity-link">ICMSPageTypeRestriction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSPageTypeRestrictions.html" data-type="entity-link">ICMSPageTypeRestrictions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGenericEditorModalComponentData.html" data-type="entity-link">IGenericEditorModalComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProductCatalogInfo.html" data-type="entity-link">IProductCatalogInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProductCategory.html" data-type="entity-link">IProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRestrictionsStepHandler.html" data-type="entity-link">IRestrictionsStepHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRestrictionType.html" data-type="entity-link">IRestrictionType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRestrictionTypeList.html" data-type="entity-link">IRestrictionTypeList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationNodeCMSItem.html" data-type="entity-link">NavigationNodeCMSItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StructureChangeEvent.html" data-type="entity-link">StructureChangeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SynchronizationPageConditions.html" data-type="entity-link">SynchronizationPageConditions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Workflow.html" data-type="entity-link">Workflow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowAction.html" data-type="entity-link">WorkflowAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowActionComment.html" data-type="entity-link">WorkflowActionComment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowDecision.html" data-type="entity-link">WorkflowDecision</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowEditableItem.html" data-type="entity-link">WorkflowEditableItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowEditableItemsList.html" data-type="entity-link">WorkflowEditableItemsList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowList.html" data-type="entity-link">WorkflowList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowTask.html" data-type="entity-link">WorkflowTask</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowTaskList.html" data-type="entity-link">WorkflowTaskList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowTaskPage.html" data-type="entity-link">WorkflowTaskPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowTemplate.html" data-type="entity-link">WorkflowTemplate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowTemplateList.html" data-type="entity-link">WorkflowTemplateList</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});