import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { BlankLayoutRoute } from './layouts/blank';
import { AnimationsPage } from './pages/animations';
import { SetUpPage, BrowserSupportPage } from './pages/geting-started';
import { AboutPage } from './pages/about';
import { ColorsPage, TypographyPage } from './pages/fundamentals';
import { WhyPage } from './pages/why';
import { Landing } from './pages/landing';
import { ButtonPage, ButtonGlyphsPage, VariantsPage, ButtonGroupsPage } from './pages/buttons';
import { _404 } from './pages/404';
import {
    AvatarPage,
    CardsPage,
    CodePage,
    LinksPage,
    ListsPage,
    ModalsPage,
    PaginationPage,
    PlaceholderPage,
    TablePage,
    TabsPage,
    TagsPage,
    TilesPage,
    ToastPage,
    TooltipsPage,
    TreePage,
} from './pages/components';
import { FontWeightsPage, FontGlyphsPage, TextElementsPage } from './pages/fonts';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LandingLayoutRoute exact path="/" match component={Landing} />

                <DefaultLayoutRoute path="/why" component={WhyPage} />
                <DefaultLayoutRoute path="/about" component={AboutPage} />

                <DefaultLayoutRoute path="/getting-started/setup" component={SetUpPage} />
                <DefaultLayoutRoute path="/getting-started/support" component={BrowserSupportPage} />

                <DefaultLayoutRoute path="/fundamentals/colors" component={ColorsPage} />
                <DefaultLayoutRoute path="/fundamentals/typography" component={TypographyPage} />

                <DefaultLayoutRoute path="/animations" component={AnimationsPage} />

                <DefaultLayoutRoute path="/buttons/basics" component={ButtonPage} />
                <DefaultLayoutRoute path="/buttons/button-groups" component={ButtonGroupsPage} />
                <DefaultLayoutRoute path="/buttons/glyphs" component={ButtonGlyphsPage} />
                <DefaultLayoutRoute path="/buttons/variants" component={VariantsPage} />

                <DefaultLayoutRoute path="/components/avatar" component={AvatarPage} />
                <DefaultLayoutRoute path="/components/cards" component={CardsPage} />
                <DefaultLayoutRoute path="/components/code" component={CodePage} />
                <DefaultLayoutRoute path="/components/links" component={LinksPage} />
                <DefaultLayoutRoute path="/components/lists" component={ListsPage} />
                <DefaultLayoutRoute path="/components/modal" component={ModalsPage} />
                <DefaultLayoutRoute path="/components/pagination" component={PaginationPage} />
                <DefaultLayoutRoute path="/components/placeholder" component={PlaceholderPage} />
                <DefaultLayoutRoute path="/components/table" component={TablePage} />
                <DefaultLayoutRoute path="/components/tabs" component={TabsPage} />
                <DefaultLayoutRoute path="/components/tags" component={TagsPage} />
                <DefaultLayoutRoute path="/components/tiles" component={TilesPage} />
                <DefaultLayoutRoute path="/components/toast" component={ToastPage} />
                <DefaultLayoutRoute path="/components/tooltips" component={TooltipsPage} />
                <DefaultLayoutRoute path="/components/trees" component={TreePage} />

                <DefaultLayoutRoute path="/fonts/font-weights" component={FontWeightsPage} />
                <DefaultLayoutRoute path="/fonts/glyphs" component={FontGlyphsPage} />
                <DefaultLayoutRoute path="/fonts/text-elements" component={TextElementsPage} />

                <BlankLayoutRoute component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;