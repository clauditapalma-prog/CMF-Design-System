/* @ds-bundle: {"format":4,"namespace":"CMFDesignSystem_87b826","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Educa","sourcePath":"ui_kits/portal/Educa.jsx"},{"name":"Footer","sourcePath":"ui_kits/portal/Footer.jsx"},{"name":"Header","sourcePath":"ui_kits/portal/Header.jsx"},{"name":"Home","sourcePath":"ui_kits/portal/Home.jsx"},{"name":"Icon","sourcePath":"ui_kits/portal/Icon.jsx"},{"name":"Motif","sourcePath":"ui_kits/portal/Motif.jsx"},{"name":"ReclamoForm","sourcePath":"ui_kits/portal/ReclamoForm.jsx"},{"name":"Tramites","sourcePath":"ui_kits/portal/Tramites.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"7cfa4d2995e1","components/core/Alert.jsx":"41bac65e8aeb","components/core/Badge.jsx":"2f2af86d7f45","components/core/Button.jsx":"6d5927f3f7ba","components/core/Card.jsx":"ace400d36d26","components/forms/Checkbox.jsx":"f018c2276e7b","components/forms/Input.jsx":"b8d66aa3b199","components/forms/Select.jsx":"dfffdb079a79","components/navigation/Breadcrumb.jsx":"bbbc1d2e2a1c","components/navigation/Tabs.jsx":"c61121b4a145","ui_kits/portal/Educa.jsx":"be9f438cb151","ui_kits/portal/Footer.jsx":"b6b3e5bd24da","ui_kits/portal/Header.jsx":"d96e077ffb83","ui_kits/portal/Home.jsx":"6247705c4225","ui_kits/portal/Icon.jsx":"cf1d68693f88","ui_kits/portal/Motif.jsx":"75f4393fd5c4","ui_kits/portal/ReclamoForm.jsx":"6e13579b09fc","ui_kits/portal/Tramites.jsx":"1525a8d87046"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CMFDesignSystem_87b826 = window.CMFDesignSystem_87b826 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF — Logo
 *
 * Elige el archivo oficial que corresponde al fondo. El manual prohíbe alterar
 * el color del logo, así que este componente NUNCA aplica filtros ni recolorea:
 * conmuta entre los archivos oficiales de assets/logos/.
 *
 * Reglas completas: ../../assets/logos/LOGOS.md
 */

const ARCHIVOS = {
  // fondo -> { conClaim, sinClaim, vertical }
  claro: {
    conClaim: 'assets/logos/logo-CMF-color-claim.png',
    sinClaim: 'assets/logos/logo-CMF-color-horizontal.png',
    vertical: 'assets/logos/logo-CMF-color-vertical.jpg'
  },
  oscuro: {
    // El SVG es la mejor opción en web: vectorial y con claim.
    conClaim: 'assets/logos/logo-cmf-blanco.svg',
    sinClaim: 'assets/logos/logo-CMF-blanco-horizontal.png',
    vertical: 'assets/logos/logo-CMF-blanco-vertical.png'
  },
  documento: {
    conClaim: 'assets/logos/logo-CMF-gris-claim.png',
    sinClaim: 'assets/logos/logo-CMF-gris-horizontal.png',
    vertical: 'assets/logos/logo-CMF-gris-vertical.png'
  }
};

/**
 * @param {object} props
 * @param {'claro'|'oscuro'|'documento'} [props.fondo]
 *   claro     — Caso 1: superficie clara o blanca.
 *   oscuro    — Caso 3: superficie oscura, cualquiera sea su tono o color.
 *   documento — Caso 2: interior de documentos, presencia secundaria de marca.
 * @param {boolean} [props.conClaim]  Por defecto true: el manual pide preferirlo.
 * @param {boolean} [props.vertical]  No disponible con claim (no existe esa versión).
 * @param {'sm'|'md'|'lg'} [props.tam]
 * @param {string} [props.base]  Prefijo de ruta hacia la raíz del sistema de diseño.
 */
function Logo({
  fondo = 'claro',
  conClaim = true,
  vertical = false,
  tam = 'md',
  base = '',
  className = '',
  ...resto
}) {
  if (vertical && conClaim) {
    // El logo con claim no tiene versión vertical: se degrada a sin claim en
    // vez de inventar un lockup que el manual no contempla.
    conClaim = false;
  }
  const set = ARCHIVOS[fondo] ?? ARCHIVOS.claro;
  const src = vertical ? set.vertical : conClaim ? set.conClaim : set.sinClaim;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}${src}`,
    alt: "Comisi\xF3n para el Mercado Financiero",
    className: `cmf-logo cmf-logo--${tam} ${className}`.trim()
  }, resto));
}
Object.assign(__ds_scope, { Logo, __ds_default_components_brand_Logo_1q8yv4x: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Alert — inline message banner for advisories, confirmations, errors.
 * Government-tone: clear, left accent bar, tinted background, no emoji.
 */
function Alert({
  children,
  tone = 'info',
  title,
  onClose,
  style,
  ...rest
}) {
  const map = {
    info: {
      bar: 'var(--cmf-navy)',
      bg: 'var(--cmf-info-bg)',
      ink: 'var(--cmf-navy)'
    },
    brand: {
      bar: 'var(--color-brand)',
      bg: 'var(--color-brand-tint)',
      ink: 'var(--cmf-purple-800)'
    },
    success: {
      bar: 'var(--cmf-success)',
      bg: 'var(--cmf-success-bg)',
      ink: '#13643f'
    },
    warning: {
      bar: 'var(--cmf-warning)',
      bg: 'var(--cmf-warning-bg)',
      ink: '#8a5905'
    },
    danger: {
      bar: 'var(--cmf-danger)',
      bg: 'var(--cmf-danger-bg)',
      ink: '#922a1f'
    }
  };
  const c = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      background: c.bg,
      borderLeft: 'var(--accent-bar-w) solid ' + c.bar,
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-4) var(--space-5)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: c.ink,
      marginBottom: title && children ? 'var(--space-1)' : 0
    }
  }, title), children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: c.ink,
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Badge — compact status / category label.
 * Tones map to brand + functional colors. `subtle` fills with a tint.
 */
function Badge({
  children,
  tone = 'brand',
  subtle = false,
  dot = false,
  style,
  ...rest
}) {
  const map = {
    brand: {
      solid: 'var(--color-brand)',
      tint: 'var(--color-brand-tint)',
      ink: 'var(--cmf-purple-800)'
    },
    accent: {
      solid: 'var(--color-accent)',
      tint: 'var(--cmf-teal-50)',
      ink: 'var(--cmf-teal-deep)'
    },
    neutral: {
      solid: 'var(--cmf-ink-500)',
      tint: 'var(--cmf-ink-100)',
      ink: 'var(--cmf-ink-700)'
    },
    success: {
      solid: 'var(--cmf-success)',
      tint: 'var(--cmf-success-bg)',
      ink: '#13643f'
    },
    warning: {
      solid: 'var(--cmf-warning)',
      tint: 'var(--cmf-warning-bg)',
      ink: '#8a5905'
    },
    danger: {
      solid: 'var(--cmf-danger)',
      tint: 'var(--cmf-danger-bg)',
      ink: '#922a1f'
    },
    navy: {
      solid: 'var(--cmf-navy)',
      tint: 'var(--cmf-info-bg)',
      ink: 'var(--cmf-navy)'
    }
  };
  const c = map[tone] || map.brand;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wide)',
    lineHeight: 1,
    padding: '5px 10px',
    borderRadius: 'var(--radius-pill)',
    background: subtle ? c.tint : c.solid,
    color: subtle ? c.ink : 'var(--cmf-white)',
    whiteSpace: 'nowrap',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: subtle ? c.solid : 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Button — institutional, restrained, purpose-built for a regulator.
 * Variants: primary (purple), secondary (outline), ghost, accent (teal), danger.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconStart,
  iconEnd,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 var(--space-3)',
      height: 34,
      fontSize: 'var(--fs-sm)'
    },
    md: {
      padding: '0 var(--space-5)',
      height: 42,
      fontSize: 'var(--fs-body)'
    },
    lg: {
      padding: '0 var(--space-6)',
      height: 50,
      fontSize: 'var(--fs-lg)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: 'var(--text-on-brand)',
      border: 'var(--border-w) solid var(--color-brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-brand)',
      border: 'var(--border-w-thick) solid var(--color-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand)',
      border: 'var(--border-w-thick) solid transparent'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-brand)',
      border: 'var(--border-w) solid var(--color-accent)'
    },
    danger: {
      background: 'var(--cmf-danger)',
      color: 'var(--text-on-brand)',
      border: 'var(--border-w) solid var(--cmf-danger)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-brand-strong)';else if (variant === 'accent') e.currentTarget.style.background = 'var(--color-accent-deep)';else if (variant === 'danger') e.currentTarget.style.filter = 'brightness(0.92)';else e.currentTarget.style.background = 'var(--color-brand-tint-faint)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Card — the workhorse surface. White, soft-shadowed, small radius.
 * `accent` adds the signature top rule; `as` lets it render as a link.
 */
function Card({
  children,
  accent = false,
  accentColor = 'var(--color-brand)',
  interactive = false,
  padding = 'var(--space-5)',
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  const base = {
    position: 'relative',
    background: 'var(--surface-card)',
    border: 'var(--border-w) solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    padding,
    overflow: 'hidden',
    transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    cursor: interactive ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    } : undefined
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--accent-bar-w)',
      background: accentColor
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TICK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")";
function paint(el) {
  if (!el) return;
  const on = el.checked;
  el.style.background = on ? 'var(--color-brand)' : 'var(--surface-card)';
  el.style.borderColor = on ? 'var(--color-brand)' : 'var(--border-strong)';
  el.style.backgroundImage = on ? TICK : 'none';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
}

/** CMF Checkbox — controlled or uncontrolled, with inline label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const fieldId = id || (label ? 'c-' + String(label).replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      flexShrink: 0,
      border: 'var(--border-w-thick) solid var(--border-strong)',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--surface-card)',
      cursor: 'inherit',
      position: 'relative',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    },
    onInput: e => paint(e.currentTarget),
    ref: paint
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 'var(--lh-snug)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** CMF Input — labelled text field with helper / error states. */
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  type = 'text',
  prefix,
  style,
  ...rest
}) {
  const fieldId = id || (label ? 'f-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cmf-danger)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: 'var(--border-w) solid ' + (invalid ? 'var(--cmf-danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 'var(--space-3)',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    "aria-invalid": invalid,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      padding: '0 var(--space-3)',
      height: 42,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    },
    onFocus: e => {
      const w = e.currentTarget.closest('div');
      w.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--color-brand-soft)';
      w.style.boxShadow = '0 0 0 3px ' + (invalid ? 'var(--cmf-danger-bg)' : 'var(--color-brand-tint)');
    },
    onBlur: e => {
      const w = e.currentTarget.closest('div');
      w.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--border-default)';
      w.style.boxShadow = 'none';
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: invalid ? 'var(--cmf-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** CMF Select — native dropdown styled to match Input. */
function Select({
  label,
  hint,
  error,
  required = false,
  id,
  children,
  style,
  ...rest
}) {
  const fieldId = id || (label ? 's-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cmf-danger)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    "aria-invalid": invalid,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 42,
      padding: '0 40px 0 var(--space-3)',
      background: 'var(--surface-card)',
      border: 'var(--border-w) solid ' + (invalid ? 'var(--cmf-danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-brand-soft)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-brand-tint)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BC")), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: invalid ? 'var(--cmf-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** CMF Breadcrumb — government-portal trail. Pass items {label, href}. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Migas de pan",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-2)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? 'page' : undefined,
      style: {
        color: last ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: last ? 'var(--fw-semibold)' : 'var(--fw-regular)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-link)';
        e.currentTarget.style.textDecoration = 'underline';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.textDecoration = 'none';
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--border-default)'
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * CMF Tabs — underline-style segmented navigation.
 * Controlled (value + onChange) or uncontrolled (defaultValue).
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: 'var(--border-w) solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        padding: 'var(--space-3) 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: on ? 'var(--color-brand)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-standard)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-strong)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--color-brand-tint)' : 'var(--cmf-ink-100)',
        color: on ? 'var(--cmf-purple-800)' : 'var(--text-muted)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px 8px'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 'var(--accent-bar-w)',
        background: 'var(--color-brand)',
        borderRadius: 'var(--radius-pill) var(--radius-pill) 0 0',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Icon.jsx
try { (() => {
/**
 * CMF icon set — curated Lucide (https://lucide.dev) outline glyphs.
 * Stroke 1.75, 24×24, currentColor. SUBSTITUTION: the brand manual's
 * iconography page could not be extracted; Lucide is our chosen match
 * (consistent humanist line style suited to a public regulator).
 */
const P = {
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  chevronRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  chevronDown: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  fileText: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6M8 13h8M8 17h8M8 9h2"
  })),
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  graduation: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 10 12 5 2 10l10 5 10-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"
  })),
  alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  phone: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"
  })),
  building: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"
  })),
  chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16V11M12 16V7M17 16v-3"
  })),
  external: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a2 2 0 0 0 3.4 0"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-1a7 7 0 0 1 14 0v1"
  })),
  scale: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18M7 21h10M5 7l-3 6a4 4 0 0 0 6 0L5 7zM19 7l-3 6a4 4 0 0 0 6 0l-3-6zM5 7h14M9 5l6-1"
  })),
  search2: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12M7 11l5 5 5-5M5 21h14"
  })),
  globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m20 6-11 11-5-5"
  }))
};
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, P[name] || null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Footer.jsx
try { (() => {
const COLS = [{
  h: 'La Comisión',
  items: ['Quiénes somos', 'Consejo', 'Marco legal', 'Cuenta pública']
}, {
  h: 'Mercados',
  items: ['Bancos e instituciones', 'Valores y seguros', 'Cooperativas', 'Registros']
}, {
  h: 'Usuarios',
  items: ['Atención de público', 'Presentar un reclamo', 'Conoce tu deuda', 'Alertas de fraude']
}, {
  h: 'Transparencia',
  items: ['Transparencia activa', 'Solicitud de información', 'Datos abiertos', 'Auditorías']
}];
const legalLink = {
  color: 'rgba(255,255,255,.6)',
  cursor: 'pointer'
};

/** CMF portal footer with sitemap, contact band and legal strip. */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-sans)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cmf-navy)',
      color: 'rgba(255,255,255,.82)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 36px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-CMF-blanco-vertical.png",
    alt: "CMF",
    style: {
      height: 92,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-snug)',
      margin: 0,
      maxWidth: 240
    }
  }, "Av. Libertador Bernardo O'Higgins 1449, Santiago, Chile."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      margin: '10px 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#fff',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15
  }), " 600 831 0000")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      margin: '0 0 14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'rgba(255,255,255,.82)',
      textDecoration: 'none',
      fontSize: 'var(--fs-sm)',
      cursor: 'pointer'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Comisi\xF3n para el Mercado Financiero \xB7 Regulador y supervisor financiero de Chile"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: legalLink
  }, "T\xE9rminos de uso"), /*#__PURE__*/React.createElement("a", {
    style: legalLink
  }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
    style: legalLink
  }, "Accesibilidad"))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Header.jsx
try { (() => {
const NAV = ['Inicio', 'Normativa', 'Trámites', 'Educación', 'Estadísticas', 'Sala de prensa'];
const bar = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  height: 36,
  alignItems: 'center'
};
const ulink = {
  color: 'rgba(255,255,255,.85)',
  textDecoration: 'none',
  cursor: 'pointer'
};
const iconBtn = {
  width: 42,
  height: 42,
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-subtle)',
  background: 'var(--surface-card)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const portalBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'var(--color-brand)',
  color: '#fff',
  fontWeight: 700,
  fontSize: 'var(--fs-sm)',
  padding: '0 18px',
  height: 42,
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  textDecoration: 'none'
};

/** CMF portal masthead: government utility bar + main nav + search. */
function Header({
  active = 'Inicio',
  onNavigate
}) {
  const go = label => onNavigate && onNavigate(label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cmf-navy)',
      color: 'rgba(255,255,255,.85)',
      fontSize: 'var(--fs-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: bar
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 14
  }), " Gobierno de Chile"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Transparencia"), /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Mapa del sitio"), /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: '#fff',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13
  }), " 600 831 0000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      height: 84,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('Inicio'),
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-CMF-color-claim.png",
    alt: "Comisi\xF3n para el Mercado Financiero",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Buscar",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--color-brand)"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Alertas",
    style: {
      ...iconBtn,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 20,
    color: "var(--color-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 7,
      right: 7,
      width: 7,
      height: 7,
      background: 'var(--cmf-teal)',
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement("a", {
    style: portalBtn,
    onClick: () => go('Trámites')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 17,
    color: "#fff"
  }), " Portal de tr\xE1mites")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      ...bar,
      gap: 4,
      height: 52
    }
  }, NAV.map(label => {
    const on = label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => go(label),
      style: {
        position: 'relative',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '0 16px',
        height: 52,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-sm)',
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--color-brand)' : 'var(--text-body)',
        letterSpacing: '.01em'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 0,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: 'var(--color-brand)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Motif.jsx
try { (() => {
/**
 * CMF cover treatment — the official 2026 institutional background
 * (assets/backgrounds/cmf-fondo-oscuro-2026.jpg): concentric circles,
 * diagonal bands and dot screens over deep navy.
 *
 * The master JPEG carries the CMF logo, the site URL and the social icons
 * baked in, and a portal hero already shows the logo in its header — so the
 * hero variant crops to the artwork side (`variant="hero"`, default) and
 * only `variant="portada"` shows the full master, for slide-style covers.
 */
function Motif({
  opacity = 1,
  variant = 'hero'
}) {
  const url = "url('../../assets/backgrounds/cmf-fondo-oscuro-2026.jpg')";
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      opacity,
      background: 'var(--cmf-navy) ' + url + ' ' + (variant === 'portada' ? 'center/cover' : 'left 30% / 150% auto') + ' no-repeat'
    }
  });
}
Object.assign(__ds_scope, { Motif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Motif.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Educa.jsx
try { (() => {
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
const SIM = [{
  icon: 'scale',
  t: 'Simulador de crédito',
  d: 'Compara el costo total de un crédito de consumo.'
}, {
  icon: 'chart',
  t: 'Simulador de ahorro',
  d: 'Proyecta cuánto puedes acumular en el tiempo.'
}, {
  icon: 'shield',
  t: 'Simulador de seguros',
  d: 'Estima coberturas según tu perfil.'
}];
const TOPICS = [{
  t: 'Cómo elegir un crédito',
  tag: 'Crédito',
  tone: 'brand'
}, {
  t: 'Entendiendo el CAE',
  tag: 'Conceptos',
  tone: 'navy'
}, {
  t: 'Qué cubre tu seguro',
  tag: 'Seguros',
  tone: 'accent'
}, {
  t: 'Evita fraudes y estafas',
  tag: 'Seguridad',
  tone: 'warning'
}, {
  t: 'Tu primer presupuesto',
  tag: 'Finanzas',
  tone: 'brand'
}, {
  t: 'Derechos del consumidor financiero',
  tag: 'Derechos',
  tone: 'navy'
}];
function Educa() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-page)',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cmf-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Motif, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '56px 24px 60px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--cmf-teal)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "graduation",
    size: 34,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--cmf-teal-200)'
    }
  }, "CMF Educa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '8px 0 8px',
      fontSize: 'var(--fs-h1)'
    }
  }, "Educaci\xF3n financiera para todas y todos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'rgba(255,255,255,.88)',
      fontSize: 'var(--fs-lg)',
      maxWidth: 620
    }
  }, "Herramientas, simuladores y contenidos para tomar mejores decisiones con tu dinero.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontSize: 'var(--fs-h3)'
    }
  }, "Simuladores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, SIM.map(s => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: s.t,
    accent: true,
    accentColor: "var(--color-accent)",
    interactive: true,
    as: "a"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cmf-teal-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 24,
    color: "var(--cmf-teal-deep)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontSize: 'var(--fs-h4)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-snug)'
    }
  }, s.d), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "sm",
    iconEnd: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrowRight",
      size: 16,
      color: "#fff"
    })
  }, "Abrir simulador"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontSize: 'var(--fs-h3)'
    }
  }, "Aprende por tema"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, TOPICS.map(t => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: t.t,
    interactive: true,
    as: "a",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: t.tone,
    subtle: true
  }, t.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '12px 0 0',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, t.t, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 18,
    color: "var(--cmf-ink-300)"
  })))))));
}
Object.assign(__ds_scope, { Educa });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Educa.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Home.jsx
try { (() => {
const SERVICES = [{
  icon: 'fileText',
  t: 'Presentar un reclamo',
  d: 'Reclamos contra entidades fiscalizadas.'
}, {
  icon: 'search2',
  t: 'Conoce tu deuda',
  d: 'Consulta tu informe de deudas.'
}, {
  icon: 'shield',
  t: 'Alertas de fraude',
  d: 'Verifica entidades y evita estafas.'
}, {
  icon: 'scale',
  t: 'Conoce tu seguro',
  d: 'Pólizas y coberturas contratadas.'
}, {
  icon: 'building',
  t: 'Entidades fiscalizadas',
  d: 'Registro de bancos, valores y seguros.'
}, {
  icon: 'graduation',
  t: 'Educación financiera',
  d: 'Aprende a tomar mejores decisiones.'
}];
const NEWS = [{
  tag: 'Normativa',
  tone: 'brand',
  t: 'CMF publica norma sobre gestión de riesgos operacionales',
  d: 'La nueva normativa actualiza los estándares para bancos e instituciones financieras.',
  date: '12 mar 2026'
}, {
  tag: 'Comunicado',
  tone: 'navy',
  t: 'Resultados del sistema bancario a febrero de 2026',
  d: 'El informe mensual presenta los principales indicadores de la industria.',
  date: '08 mar 2026'
}, {
  tag: 'Educación',
  tone: 'accent',
  t: 'Nuevo simulador de crédito de consumo disponible',
  d: 'Una herramienta para comparar y entender el costo total del crédito.',
  date: '03 mar 2026'
}];
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cmf-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Motif, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '72px 24px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--cmf-teal-200)'
    }
  }, "Regulador y supervisor financiero de Chile"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-h1)',
      lineHeight: 1.1,
      margin: '16px 0 12px',
      maxWidth: 560
    }
  }, "Un mercado financiero seguro, transparente y estable"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'rgba(255,255,255,.85)',
      lineHeight: 'var(--lh-snug)',
      margin: '0 0 28px',
      maxWidth: 520
    }
  }, "Regulamos y supervisamos a las instituciones financieras para proteger a los usuarios y resguardar la fe p\xFAblica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Busca tr\xE1mites, normativa o entidades\u2026",
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      padding: '12px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary"
  }, "Buscar"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: -48,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: s.t,
    interactive: true,
    as: "a",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-brand-tint)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 24,
    color: "var(--color-brand)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-snug)'
    }
  }, s.d)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 18,
    color: "var(--cmf-ink-300)",
    style: {
      marginLeft: 'auto',
      alignSelf: 'center'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--cmf-warning-bg)',
      borderLeft: '4px solid var(--cmf-warning)',
      borderRadius: 'var(--radius-sm)',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 22,
    color: "var(--cmf-warning)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#8a5905'
    }
  }, "Alerta de mercado:"), " verifica siempre que una entidad est\xE9 inscrita en los registros de la CMF antes de contratar productos financieros."), /*#__PURE__*/React.createElement("a", {
    style: {
      marginLeft: 'auto',
      whiteSpace: 'nowrap',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      cursor: 'pointer'
    }
  }, "Ver registro \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", {
    className: "cmf-rule",
    style: {
      height: 4,
      width: 56,
      background: 'var(--color-brand)',
      border: 0,
      borderRadius: 999,
      margin: '0 0 10px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h2)'
    }
  }, "Sala de prensa")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNavigate && onNavigate('Sala de prensa')
  }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: n.t,
    interactive: true,
    as: "a"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: n.tone,
    subtle: true
  }, n.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '12px 0 8px',
      fontSize: 'var(--fs-h4)',
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, n.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-snug)'
    }
  }, n.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13,
    color: "var(--text-faint)"
  }), " ", n.date))))));
}
Object.assign(__ds_scope, { Home });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/ReclamoForm.jsx
try { (() => {
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
const STEPS = ['Identificación', 'Tu reclamo', 'Revisión'];
function ReclamoForm({
  onBack
}) {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-page)',
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '22px 24px 22px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: 'Inicio',
      href: '#'
    }, {
      label: 'Trámites',
      href: '#'
    }, {
      label: 'Presentar un reclamo'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 6px',
      fontSize: 'var(--fs-h2)'
    }
  }, "Presentar un reclamo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body)'
    }
  }, "Contra una entidad fiscalizada por la CMF."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 28,
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, STEPS.map((s, i) => {
    const state = done ? 'done' : i < step ? 'done' : i === step ? 'active' : 'todo';
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 6px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--fs-sm)',
        fontWeight: 700,
        background: state === 'todo' ? 'var(--cmf-ink-100)' : 'var(--color-brand)',
        color: state === 'todo' ? 'var(--text-muted)' : '#fff'
      }
    }, state === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 15,
      color: "#fff"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-sm)',
        fontWeight: state === 'active' ? 700 : 500,
        color: state === 'active' ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, s));
  }))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "var(--space-6)"
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--cmf-success-bg)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 34,
    color: "var(--cmf-success)",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px'
    }
  }, "Reclamo ingresado"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      color: 'var(--text-muted)'
    }
  }, "Folio de seguimiento"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--color-brand)',
      fontWeight: 700
    }
  }, "CMF-2026-048213"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onBack
  }, "Volver a tr\xE1mites")) : /*#__PURE__*/React.createElement(React.Fragment, null, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h3)'
    }
  }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "info"
  }, "Tus datos est\xE1n protegidos conforme a la normativa vigente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "RUT",
    prefix: "RUT",
    placeholder: "12.345.678-9",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Nombre completo",
    placeholder: "Nombre y apellidos",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Correo electr\xF3nico",
    type: "email",
    placeholder: "tucorreo@ejemplo.cl",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Tel\xE9fono",
    placeholder: "+56 9 ____ ____"
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h3)'
    }
  }, "Detalle del reclamo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Tipo de entidad",
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Selecciona\u2026"), /*#__PURE__*/React.createElement("option", null, "Banco"), /*#__PURE__*/React.createElement("option", null, "Compa\xF1\xEDa de seguros"), /*#__PURE__*/React.createElement("option", null, "Emisor de valores"), /*#__PURE__*/React.createElement("option", null, "Cooperativa")), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Nombre de la entidad",
    placeholder: "Ej. Banco ___",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Materia del reclamo",
    placeholder: "Resume el motivo en una frase",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Descripci\xF3n ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cmf-danger)'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "Describe lo ocurrido con el mayor detalle posible.",
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      resize: 'vertical',
      outline: 'none'
    }
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h3)'
    }
  }, "Revisi\xF3n y env\xEDo"), /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "warning",
    title: "Antes de enviar"
  }, "Revisa que la informaci\xF3n sea correcta. El reclamo ser\xE1 derivado a la entidad correspondiente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Declaro que la informaci\xF3n entregada es veraz y completa.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Autorizo a la CMF a comunicarme el estado del reclamo por correo."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => step === 0 ? onBack && onBack() : setStep(step - 1)
  }, step === 0 ? 'Cancelar' : 'Atrás'), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: () => step === 2 ? setDone(true) : setStep(step + 1)
  }, step === 2 ? 'Enviar reclamo' : 'Continuar'))))));
}
Object.assign(__ds_scope, { ReclamoForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/ReclamoForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Tramites.jsx
try { (() => {
const TRAMITES = [{
  icon: 'fileText',
  t: 'Presentar un reclamo',
  d: 'Reclamos contra bancos, aseguradoras y otras entidades fiscalizadas.',
  tag: 'En línea',
  tone: 'success',
  time: '10 min'
}, {
  icon: 'search2',
  t: 'Conoce tu deuda',
  d: 'Solicita tu informe consolidado de deudas del sistema financiero.',
  tag: 'En línea',
  tone: 'success',
  time: 'Inmediato'
}, {
  icon: 'shield',
  t: 'Consulta de entidades fiscalizadas',
  d: 'Verifica si una entidad está autorizada por la CMF.',
  tag: 'En línea',
  tone: 'success',
  time: 'Inmediato'
}, {
  icon: 'scale',
  t: 'Conoce tu seguro',
  d: 'Consulta las pólizas de seguro contratadas a tu nombre.',
  tag: 'En línea',
  tone: 'success',
  time: 'Inmediato'
}, {
  icon: 'building',
  t: 'Inscripción en el Registro de Valores',
  d: 'Trámite para emisores que requieren inscripción.',
  tag: 'Con clave',
  tone: 'navy',
  time: 'Variable'
}, {
  icon: 'download',
  t: 'Certificado de vigencia',
  d: 'Descarga certificados emitidos por la Comisión.',
  tag: 'En línea',
  tone: 'success',
  time: '5 min'
}];
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
function Tramites({
  onOpenReclamo
}) {
  const [tab, setTab] = React.useState('todos');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-page)',
      minHeight: '60vh',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '22px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: 'Inicio',
      href: '#'
    }, {
      label: 'Trámites y servicios'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 8px',
      fontSize: 'var(--fs-h1)'
    }
  }, "Tr\xE1mites y servicios"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-lg)',
      maxWidth: 640
    }
  }, "Realiza tr\xE1mites en l\xEDnea y accede a la informaci\xF3n que la CMF pone a disposici\xF3n de los usuarios."), /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'todos',
      label: 'Todos',
      count: 24
    }, {
      id: 'usuarios',
      label: 'Usuarios'
    }, {
      id: 'entidades',
      label: 'Entidades'
    }, {
      id: 'certificados',
      label: 'Certificados'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 24,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '0 12px',
      height: 44
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar tr\xE1mite por nombre\u2026",
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      padding: '0 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)'
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary"
  }, "M\xE1s filtros")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, TRAMITES.map(x => {
    const esReclamo = x.t.includes('reclamo');
    return /*#__PURE__*/React.createElement(__ds_scope.Card, {
      key: x.t,
      interactive: true,
      onClick: esReclamo ? onOpenReclamo : undefined,
      as: esReclamo ? 'button' : 'div',
      style: esReclamo ? {
        textAlign: 'left',
        width: '100%',
        font: 'inherit'
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-brand-tint)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: x.icon,
      size: 24,
      color: "var(--color-brand)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body)',
        color: 'var(--text-strong)'
      }
    }, x.t), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: x.tone,
      subtle: true,
      dot: true
    }, x.tag)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 10px',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-snug)'
      }
    }, x.d), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "clock",
      size: 13,
      color: "var(--text-faint)"
    }), " Duraci\xF3n estimada: ", x.time)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrowRight",
      size: 18,
      color: "var(--color-brand)",
      style: {
        alignSelf: 'center'
      }
    })));
  })));
}
Object.assign(__ds_scope, { Tramites });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Tramites.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Educa = __ds_scope.Educa;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Home = __ds_scope.Home;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Motif = __ds_scope.Motif;

__ds_ns.ReclamoForm = __ds_scope.ReclamoForm;

__ds_ns.Tramites = __ds_scope.Tramites;

})();
