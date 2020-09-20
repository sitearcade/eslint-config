// vars

const tabbable = [
  'button',
  'checkbox',
  'link',
  'progressbar',
  'searchbox',
  'slider',
  'spinbutton',
  'switch',
  'textbox',
];

const controlOpts = {
  labelComponents: ['Label'],
  controlComponents: [
    'Input',
    'Text',
    'TextArea',
    'Radio',
    'Checkbox',
    'Select',
  ],
};

const interOpts = {
  body: ['onwarn', 'onLoad'],
  iframe: ['onwarn', 'onLoad'],
  img: ['onwarn', 'onLoad'],
};

// export

module.exports = {
  plugins: ['jsx-a11y'],

  rules: {
    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/aria-activedescendant-has-tabindex': 1,
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/aria-unsupported-elements': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/heading-has-content': 1,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': [1, {tabbable}],
    'jsx-a11y/label-has-associated-control': [1, controlOpts],
    'jsx-a11y/lang': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-access-key': 1,
    'jsx-a11y/no-autofocus': [1, {ignoreNonDOM: true}],
    'jsx-a11y/no-distracting-elements': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': [1, interOpts],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-onchange': 1,
    'jsx-a11y/no-redundant-roles': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/scope': 1,
    'jsx-a11y/tabindex-no-positive': 1,
  },
};
