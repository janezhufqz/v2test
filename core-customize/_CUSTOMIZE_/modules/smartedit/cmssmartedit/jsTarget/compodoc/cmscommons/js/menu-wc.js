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
                                <a href="modules/CmsCommonsModule.html" data-type="entity-link">CmsCommonsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CmsCommonsModule-1a9e41f24f06c2255ef659c28496bec5"' : 'data-target="#xs-injectables-links-module-CmsCommonsModule-1a9e41f24f06c2255ef659c28496bec5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CmsCommonsModule-1a9e41f24f06c2255ef659c28496bec5"' :
                                        'id="xs-injectables-links-module-CmsCommonsModule-1a9e41f24f06c2255ef659c28496bec5"' }>
                                        <li class="link">
                                            <a href="injectables/CmsitemsRestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CmsitemsRestService</a>
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
                                <a href="classes/AssetsService.html" data-type="entity-link">AssetsService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IComponentSharedService.html" data-type="entity-link">IComponentSharedService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IContextAwareEditableItemService.html" data-type="entity-link">IContextAwareEditableItemService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IEditorModalService.html" data-type="entity-link">IEditorModalService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IPageContentSlotsComponentsRestService.html" data-type="entity-link">IPageContentSlotsComponentsRestService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IPageService.html" data-type="entity-link">IPageService</a>
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
                                    <a href="injectables/CmsitemsRestService.html" data-type="entity-link">CmsitemsRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SynchronizationService.html" data-type="entity-link">SynchronizationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/VersionExperienceInterceptor.html" data-type="entity-link">VersionExperienceInterceptor</a>
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
                                <a href="interfaces/CMSItem.html" data-type="entity-link">CMSItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMSItemSearch.html" data-type="entity-link">CMSItemSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMSItemStructure.html" data-type="entity-link">CMSItemStructure</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMSItemStructureField.html" data-type="entity-link">CMSItemStructureField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CMSRestriction.html" data-type="entity-link">CMSRestriction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DiscardableTimer.html" data-type="entity-link">DiscardableTimer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICloneableCatalogVersion.html" data-type="entity-link">ICloneableCatalogVersion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSComponent.html" data-type="entity-link">ICMSComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSMedia.html" data-type="entity-link">ICMSMedia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICMSPage.html" data-type="entity-link">ICMSPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponent.html" data-type="entity-link">IComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGenericEditorModalServiceComponent.html" data-type="entity-link">IGenericEditorModalServiceComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISynchronizationPanelApi.html" data-type="entity-link">ISynchronizationPanelApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISyncJob.html" data-type="entity-link">ISyncJob</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISyncStatus.html" data-type="entity-link">ISyncStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISyncStatusItem.html" data-type="entity-link">ISyncStatusItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link">Page</a>
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