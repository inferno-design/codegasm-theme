import { brighten, darken, setAlpha } from './helpers'
import { palette } from './palette'

const {
  black,
  blue400,
  blue500,
  cyan400,
  gray200,
  gray300,
  gray400,
  gray600,
  gray700,
  gray800,
  gray900,
  gray950,
  green300,
  orange300,
  red300,
  red400,
  red500,
  red600,
  transparent,
  violet300,
  violet400,
  violet500,
  white,
  yellow200,
  yellow300,
  yellow400,
} = palette

export const semanticTokenColors = {
  'boolean': orange300,
  'class': orange300,
  'comment': gray400,
  'constant': red500,
  'entity': orange300,
  'function': violet300,
  'interface': green300,
  'keyword': red500,
  'module': blue400,
  'namespace': red500,
  'number': red500,
  'object': orange300,
  'property': gray200,
  'punctuation': gray200,
  'storage': blue400,
  'string': yellow200,
  'support': orange300,
  'type': blue400,
  'variable': gray200,
}

export const colors = {
  // Base Colors
  'focusBorder': gray900,
  'foreground': gray200,
  'disabledForeground': gray600,
  'widget.border': gray900,
  'widget.shadow': transparent,
  'selection.background': setAlpha(gray200, 0.2),
  'descriptionForeground': gray400,
  'errorForeground': red600,
  'icon.foreground': gray200,
  'sash.hoverBorder': setAlpha(gray600, 0.2),

  // Activity Bar
  'activityBar.activeBorder': violet500,
  'activityBar.background': gray950,
  'activityBar.border': gray900,
  'activityBar.foreground': gray200,
  'activityBar.inactiveForeground': gray400,
  'activityBar.activeBackground': gray900,
  'activityBar.activeFocusBorder': violet500,
  'activityBar.dropBorder': violet500,
  'activityBarBadge.background': violet500,
  'activityBarBadge.foreground': white,

  // Badge
  'badge.background': violet500,
  'badge.foreground': white,

  // Breadcrumb
  'breadcrumb.activeSelectionForeground': gray200,
  'breadcrumb.background': gray950,
  'breadcrumb.focusForeground': gray200,
  'breadcrumb.foreground': gray400,
  'breadcrumbPicker.background': gray900,

  // Button
  'button.border': gray900,
  'button.separator': gray900,
  'button.background': darken(violet500, 5),
  'button.foreground': white,
  'button.hoverBackground': violet500,
  'button.secondaryBackground': gray800,
  'button.secondaryForeground': gray200,
  'button.secondaryHoverBackground': gray700,

  // Checkbox
  'checkbox.background': violet500,
  'checkbox.foreground': white,
  'checkbox.border': violet500,
  'checkbox.selectBackground': gray900,
  'checkbox.selectBorder': gray800,

  // Contrast Border
  'contrastBorder': gray800,

  // Debug Tool Bar
  'debugToolBar.background': gray950,
  'debugToolBar.border': violet500,

  // Diff Editor
  'diffEditor.border': gray900,
  'diffEditor.diagonalFill': gray950,
  'diffEditor.insertedLineBackground': setAlpha(brighten(green300, 20), 0.05),
  'diffEditor.insertedTextBackground': setAlpha(brighten(green300, 20), 0.1),
  'diffEditor.removedLineBackground': setAlpha(brighten(red400, 20), 0.05),
  'diffEditor.removedTextBackground': setAlpha(brighten(red400, 20), 0.1),

  // Dropdown
  'dropdown.background': gray900,
  'dropdown.border': gray800,

  // Editor
  'editor.background': gray950,
  'editor.findMatchBackground': transparent,
  'editor.findMatchBorder': violet500,
  'editor.findMatchHighlightBackground': transparent,
  'editor.findMatchHighlightBorder': gray200,
  'editor.foreground': gray200,
  'editor.lineHighlightBackground': setAlpha(gray400, 0.1),
  'editor.lineHighlightBorder': transparent,
  'editor.linkedEditingBackground': gray900,
  'editor.rangeHighlightBorder': gray200,
  'editor.selectionBackground': setAlpha(gray200, 0.1),
  'editor.selectionHighlightBackground': setAlpha(gray200, 0.1),
  'editor.selectionHighlightBorder': gray200,
  'editor.wordHighlightBackground': setAlpha(gray200, 0.2),
  'editor.wordHighlightBorder': violet300,
  'editor.wordHighlightStrongBackground': setAlpha(gray200, 0.2),
  'editor.wordHighlightStrongBorder': violet500,

  // Editor Bracket Highlight
  'editorBracketHighlight.foreground1': blue400,
  'editorBracketHighlight.foreground2': violet400,
  'editorBracketHighlight.foreground3': orange300,
  'editorBracketHighlight.foreground4': red400,
  'editorBracketHighlight.foreground5': green300,
  'editorBracketHighlight.foreground6': yellow300,
  'editorBracketHighlight.unexpectedBracket.foreground': red600,
  'editorBracketMatch.background': black,
  'editorBracketMatch.border': gray300,

  // Bracket pair guides
  'editorBracketPairGuide.activeBackground1': blue400,
  'editorBracketPairGuide.activeBackground2': violet400,
  'editorBracketPairGuide.activeBackground3': orange300,
  'editorBracketPairGuide.activeBackground4': red400,
  'editorBracketPairGuide.activeBackground5': green300,
  'editorBracketPairGuide.activeBackground6': yellow300,
  'editorBracketPairGuide.background1': blue400,
  'editorBracketPairGuide.background2': violet400,
  'editorBracketPairGuide.background3': orange300,
  'editorBracketPairGuide.background4': red400,
  'editorBracketPairGuide.background5': green300,
  'editorBracketPairGuide.background6': yellow300,

  // Editor Code Lens
  'editorCodeLens.foreground': gray300,

  // Editor Cursor
  'editorCursor.foreground': gray200,
  'editorCursor.background': gray900,

  // Editor Error
  'editorError.foreground': red600,

  // Editor Ghost Text
  'editorGhostText.background': gray900,
  'editorGhostText.border': gray900,
  'editorGhostText.foreground': gray200,

  // Editor Group
  'editorGroup.border': gray800,
  'editorGroup.emptyBackground': gray950,
  'editorGroupHeader.tabsBackground': gray950,

  // Editor Gutter
  'editorGutter.addedBackground': green300,
  'editorGutter.deletedBackground': orange300,
  'editorGutter.modifiedBackground': blue500,

  // Editor Hint
  'editorHint.foreground': gray400,

  // Editor Hover Widget
  'editorHoverWidget.background': gray900,
  'editorHoverWidget.border': gray800,
  'editorHoverWidget.foreground': gray200,
  'editorHoverWidget.highlightForeground': gray200,
  'editorHoverWidget.statusBarBackground': gray900,

  // Editor Indent Guide
  'editorIndentGuide.activeBackground1': setAlpha(gray200, 0.1),
  'editorIndentGuide.background1': gray900,

  // Editor Info
  'editorInfo.foreground': violet400,

  // Editor Inlay Hint
  'editorInlayHint.background': transparent,
  'editorInlayHint.foreground': gray400,
  'editorInlayHint.parameterBackground': transparent,
  'editorInlayHint.parameterForeground': gray400,
  'editorInlayHint.typeBackground': transparent,
  'editorInlayHint.typeForeground': gray400,

  // Editor Lightbulb
  'editorLightBulb.foreground': yellow300,
  'editorLightBulbAutoFix.foreground': blue500,

  // Editor Line Number
  'editorLineNumber.activeForeground': gray200,
  'editorLineNumber.foreground': gray600,

  // Editor Link
  'editorLink.activeForeground': white,

  // Editor Overview Ruler
  'editorOverviewRuler.addedForeground': green300,
  'editorOverviewRuler.background': gray950,
  'editorOverviewRuler.border': gray900,
  'editorOverviewRuler.bracketMatchForeground': gray200,
  'editorOverviewRuler.deletedForeground': orange300,
  'editorOverviewRuler.errorForeground': red600,
  'editorOverviewRuler.findMatchForeground': setAlpha(blue500, 0.5),
  'editorOverviewRuler.infoForeground': violet400,
  'editorOverviewRuler.modifiedForeground': blue400,
  'editorOverviewRuler.rangeHighlightForeground': gray200,
  'editorOverviewRuler.selectionHighlightForeground': gray200,
  'editorOverviewRuler.warningForeground': yellow300,
  'editorOverviewRuler.wordHighlightForeground': gray200,
  'editorOverviewRuler.wordHighlightStrongForeground': gray200,
  'editorOverviewRuler.wordHighlightTextForeground': gray200,

  // Editor Ruler
  'editorRuler.foreground': gray950,

  // Editor Sticky Scroll
  'editorStickyScroll.background': gray950,
  'editorStickyScrollHover.background': gray900,

  // Editor Suggest Widget
  'editorSuggestWidget.background': gray950,
  'editorSuggestWidget.border': blue500,
  'editorSuggestWidget.focusHighlightForeground': gray200,
  'editorSuggestWidget.foreground': gray200,
  'editorSuggestWidget.highlightForeground': gray200,
  'editorSuggestWidget.selectedBackground': setAlpha(gray600, 0.1),
  'editorSuggestWidget.selectedForeground': gray200,
  'editorSuggestWidget.selectedIconForeground': gray200,
  'editorSuggestWidgetStatus.foreground': gray200,

  // Editor Unnecessary Code
  'editorUnnecessaryCode.border': gray900,
  'editorUnnecessaryCode.opacity': gray900,

  // Editor Warning
  'editorWarning.foreground': yellow300,

  // Editor Whitespace
  'editorWhitespace.foreground': setAlpha(gray600, 0.1),

  // Editor Widget
  'editorWidget.background': gray950,
  'editorWidget.border': gray900,
  'editorWidget.foreground': gray200,
  'editorWidget.resizeBorder': gray900,

  // Extension Button
  'extensionButton.separator': gray900,
  'extensionButton.background': violet500,
  'extensionButton.foreground': white,
  'extensionButton.hoverBackground': darken(violet500, 5),
  'extensionButton.prominentBackground': violet500,
  'extensionButton.prominentForeground': white,
  'extensionButton.prominentHoverBackground': darken(violet500, 5),

  // Git
  'git.blame.editorDecorationForeground': gray600,

  // Git Decoration
  'gitDecoration.addedResourceForeground': green300,
  'gitDecoration.conflictingResourceForeground': yellow300,
  'gitDecoration.deletedResourceForeground': orange300,
  'gitDecoration.ignoredResourceForeground': gray600,
  'gitDecoration.modifiedResourceForeground': blue400,
  'gitDecoration.renamedResourceForeground': green300,
  'gitDecoration.stageDeletedResourceForeground': orange300,
  'gitDecoration.stageModifiedResourceForeground': blue400,
  'gitDecoration.submoduleResourceForeground': violet400,
  'gitDecoration.untrackedResourceForeground': green300,

  // Input
  'input.background': gray900,
  'input.border': gray800,
  'input.foreground': gray200,
  'input.placeholderForeground': gray400,

  // Input Option
  'inputOption.activeBorder': gray800,
  'inputOption.activeBackground': gray800,
  'inputOption.activeForeground': gray200,
  'inputOption.hoverBackground': gray800,

  // Input Validation
  'inputValidation.errorBackground': red300,
  'inputValidation.errorBorder': red400,
  'inputValidation.infoBackground': violet300,
  'inputValidation.infoBorder': violet400,
  'inputValidation.infoForeground': black,
  'inputValidation.warningBackground': yellow300,
  'inputValidation.warningBorder': yellow400,
  'inputValidation.warningForeground': black,

  // List
  'list.activeSelectionBackground': setAlpha(gray600, 0.2),
  'list.activeSelectionForeground': white,
  'list.activeSelectionIconForeground': gray200,
  'list.deemphasizedForeground': gray400,
  'list.dropBackground': gray900,
  'list.errorForeground': red600,
  'list.filterMatchBackground': gray900,
  'list.filterMatchBorder': gray900,
  'list.focusAndSelectionOutline': gray900,
  'list.focusBackground': setAlpha(gray600, 0.2),
  'list.focusForeground': gray200,
  'list.focusHighlightForeground': gray200,
  'list.focusOutline': gray900,
  'list.highlightForeground': gray200,
  'list.hoverBackground': setAlpha(gray600, 0.1),
  'list.hoverForeground': gray200,
  'list.inactiveFocusBackground': gray900,
  'list.inactiveFocusOutline': gray600,
  'list.inactiveSelectionBackground': setAlpha(gray600, 0.2),
  'list.inactiveSelectionForeground': gray300,
  'list.inactiveSelectionIconForeground': gray400,
  'list.invalidItemForeground': red600,
  'list.warningForeground': yellow300,

  // List Filter Widget
  'listFilterWidget.background': gray900,
  'listFilterWidget.outline': gray900,
  'listFilterWidget.noMatchesOutline': gray900,
  'listFilterWidget.shadow': gray900,

  // Minimap
  'minimap.background': gray950,
  'minimap.errorHighlight': red600,
  'minimap.findMatchHighlight': setAlpha(blue500, 0.8),
  'minimap.foregroundOpacity': setAlpha(gray200, 0.8),
  'minimap.infoHighlight': violet400,
  'minimap.selectionHighlight': setAlpha(gray200, 0.2),
  'minimap.selectionOccurrenceHighlight': setAlpha(gray200, 0.5),
  'minimap.warningHighlight': yellow300,

  // Minimap Gutter
  'minimapGutter.addedBackground': green300,
  'minimapGutter.deletedBackground': red400,
  'minimapGutter.modifiedBackground': blue500,

  // Minimap Slider
  'minimapSlider.activeBackground': setAlpha(gray600, 0.3),
  'minimapSlider.background': setAlpha(gray600, 0.2),
  'minimapSlider.hoverBackground': setAlpha(gray600, 0.3),

  // Notification Center
  'notificationCenter.border': gray900,
  'notificationCenterHeader.background': gray950,
  'notifications.background': gray900,
  'notifications.border': gray800,
  'notificationLink.foreground': white,
  'notificationToast.border': gray800,

  // Panel
  'panel.background': gray950,
  'panel.border': gray900,
  'panelTitle.inactiveForeground': gray600,

  // Peek View
  'peekView.border': gray800,
  'peekViewEditor.background': gray900,
  'peekViewEditor.matchHighlightBackground': setAlpha(gray600, 0.2),
  'peekViewResult.background': gray900,
  'peekViewResult.matchHighlightBackground': setAlpha(gray600, 0.2),
  'peekViewResult.selectionBackground': setAlpha(gray600, 0.1),
  'peekViewResult.selectionForeground': gray200,
  'peekViewTitle.background': gray950,

  // Problems
  'problemsErrorIcon.foreground': red600,
  'problemsInfoIcon.foreground': violet400,
  'problemsWarningIcon.foreground': yellow300,

  // Profile Badge
  'profileBadge.background': gray900,
  'profileBadge.foreground': gray200,

  // Progress Bar
  'progressBar.background': violet500,

  // Scrollbar
  'scrollbar.shadow': transparent,
  'scrollbarSlider.activeBackground': setAlpha(gray600, 0.3),
  'scrollbarSlider.background': setAlpha(gray600, 0.2),
  'scrollbarSlider.hoverBackground': setAlpha(gray600, 0.3),

  // Settings
  'settings.headerForeground': gray200,
  'settings.modifiedItemIndicator': violet500,
  'settings.dropdownBackground': gray950,
  'settings.dropdownForeground': gray200,
  'settings.dropdownBorder': gray900,
  'settings.dropdownListBorder': setAlpha(gray600, 0.1),
  'settings.checkboxBackground': gray900,
  'settings.checkboxForeground': gray200,
  'settings.checkboxBorder': gray900,
  'settings.rowHoverBackground': setAlpha(gray600, 0.1),
  'settings.textInputBackground': gray950,
  'settings.textInputForeground': gray200,
  'settings.textInputBorder': gray900,
  'settings.numberInputBackground': gray950,
  'settings.numberInputForeground': gray200,
  'settings.numberInputBorder': gray900,
  'settings.focusedRowBackground': setAlpha(gray600, 0.1),
  'settings.focusedRowBorder': setAlpha(gray600, 0.2),
  'settings.headerBorder': gray900,
  'settings.sashBorder': gray900,
  'settings.settingsHeaderHoverForeground': gray200,

  // Side Bar
  'sideBar.background': gray950,
  'sideBar.border': gray900,
  'sideBar.foreground': gray200,
  'sideBarSectionHeader.background': gray900,

  // Status Bar
  'statusBar.background': gray950,
  'statusBar.border': gray900,
  'statusBar.debuggingBackground': gray900,
  'statusBar.debuggingBorder': cyan400,
  'statusBar.debuggingForeground': gray300,
  'statusBar.focusBorder': gray300,
  'statusBar.foreground': gray300,
  'statusBar.noFolderBackground': gray950,

  // Status Bar Item
  'statusBarItem.activeBackground': darken(violet500, 5),
  'statusBarItem.errorBackground': red600,
  'statusBarItem.errorForeground': white,
  'statusBarItem.focusBorder': violet500,
  'statusBarItem.hoverBackground': darken(violet500, 5),
  'statusBarItem.hoverForeground': white,
  'statusBarItem.remoteBackground': darken(violet500, 5),
  'statusBarItem.remoteForeground': white,
  'statusBarItem.warningBackground': yellow300,
  'statusBarItem.warningForeground': white,

  // Tab
  'tab.activeBackground': gray900,
  'tab.activeBorderTop': violet500,
  'tab.activeBorder': transparent,
  'tab.activeForeground': gray200,
  'tab.border': gray900,
  'tab.inactiveBackground': gray950,
  'tab.inactiveForeground': gray400,
  'tab.lastPinnedBorder': setAlpha(gray600, 0.2),

  // Text
  'textLink.foreground': gray200,
  'textLink.activeForeground': white,

  // Text Block Quote
  'textBlockQuote.background': gray900,
  'textBlockQuote.border': gray800,

  // Text Code Block
  'textCodeBlock.background': gray900,

  // Text Preformat
  'textPreformat.foreground': gray200,

  // Text Separator
  'textSeparator.foreground': gray200,

  // Terminal
  'terminal.ansiBlack': gray800,
  'terminal.ansiBlue': blue400,
  'terminal.ansiBrightBlack': gray600,
  'terminal.ansiBrightBlue': blue400,
  'terminal.ansiBrightCyan': cyan400,
  'terminal.ansiBrightGreen': green300,
  'terminal.ansiBrightMagenta': violet300,
  'terminal.ansiBrightRed': red400,
  'terminal.ansiBrightWhite': gray300,
  'terminal.ansiBrightYellow': yellow200,
  'terminal.ansiCyan': cyan400,
  'terminal.ansiGreen': green300,
  'terminal.ansiMagenta': violet300,
  'terminal.ansiRed': red400,
  'terminal.ansiWhite': gray300,
  'terminal.ansiYellow': yellow200,
  'terminal.foreground': gray300,

  // Title Bar
  'titleBar.activeBackground': gray950,
  'titleBar.activeForeground': gray200,
  'titleBar.border': gray900,
  'titleBar.inactiveBackground': gray900,
  'titleBar.inactiveForeground': gray600,

  // Toolbar
  'toolbar.activeBackground': gray800,
  'toolbar.hoverBackground': setAlpha(gray200, 0.1),
  'toolbar.hoverOutline': gray800,

  // Tree
  'tree.indentGuidesStroke': gray400,
  'tree.inactiveIndentGuidesStroke': gray600,
  'tree.tableColumnsBorder': gray800,
  'tree.tableOddRowsBackground': gray800,

  // Welcome Page
  'welcomePage.background': gray950,
  'welcomePage.progress.background': gray950,
  'welcomePage.progress.foreground': gray200,
  'welcomePage.tileBackground': gray950,
  'welcomePage.tileHoverBackground': setAlpha(gray600, 0.1),
  'welcomePage.tileBorder': gray900,

  // Walkthrough
  'walkThrough.embeddedEditorBackground': gray950,
  'walkthrough.stepTitle.foreground': gray200,
}
