/* @ds-bundle: {"format":4,"namespace":"CMFDesignSystem_8adfb2","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Educa","sourcePath":"ui_kits/portal/Educa.jsx"},{"name":"Footer","sourcePath":"ui_kits/portal/Footer.jsx"},{"name":"Header","sourcePath":"ui_kits/portal/Header.jsx"},{"name":"Home","sourcePath":"ui_kits/portal/Home.jsx"},{"name":"Motif","sourcePath":"ui_kits/portal/Home.jsx"},{"name":"Icon","sourcePath":"ui_kits/portal/Icon.jsx"},{"name":"ReclamoForm","sourcePath":"ui_kits/portal/ReclamoForm.jsx"},{"name":"Tramites","sourcePath":"ui_kits/portal/Tramites.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"2f34ed2a6934","components/core/Badge.jsx":"d0e16c4f0e93","components/core/Button.jsx":"52d28ec23679","components/core/Card.jsx":"9e43331e73d7","components/forms/Checkbox.jsx":"6a1c9688bee0","components/forms/Input.jsx":"9ae54fb7f305","components/forms/Select.jsx":"5f79c09363d1","components/navigation/Breadcrumb.jsx":"70aea03c32cd","components/navigation/Tabs.jsx":"f2278bab1909","ui_kits/portal/Educa.jsx":"9e228ea35be7","ui_kits/portal/Footer.jsx":"248b4c4a8eb1","ui_kits/portal/Header.jsx":"cd5192a51989","ui_kits/portal/Home.jsx":"032e57b505a0","ui_kits/portal/Icon.jsx":"70a9608de5fc","ui_kits/portal/ReclamoForm.jsx":"5e111b99fa8e","ui_kits/portal/Tramites.jsx":"9279284bba15","ui_kits/portal/doc-page.js":"371bab66f42d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CMFDesignSystem_8adfb2 = window.CMFDesignSystem_8adfb2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Alert — inline message banner for advisories, confirmations, errors.
 * Government-tone: clear, left accent bar, tinted background, no emoji.
 */
function Alert({
  children,
  tone = "info",
  title,
  onClose,
  style,
  ...rest
}) {
  const map = {
    info: {
      bar: "var(--cmf-navy)",
      bg: "var(--cmf-info-bg)",
      ink: "var(--cmf-navy)"
    },
    brand: {
      bar: "var(--color-brand)",
      bg: "var(--color-brand-tint)",
      ink: "var(--cmf-purple-800)"
    },
    success: {
      bar: "var(--cmf-success)",
      bg: "var(--cmf-success-bg)",
      ink: "#13643f"
    },
    warning: {
      bar: "var(--cmf-warning)",
      bg: "var(--cmf-warning-bg)",
      ink: "#8a5905"
    },
    danger: {
      bar: "var(--cmf-danger)",
      bg: "var(--cmf-danger-bg)",
      ink: "#922a1f"
    }
  };
  const c = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      background: c.bg,
      borderLeft: "var(--accent-bar-w) solid " + c.bar,
      borderRadius: "var(--radius-sm)",
      padding: "var(--space-4) var(--space-5)",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-normal)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      color: c.ink,
      marginBottom: title && children ? "var(--space-1)" : 0
    }
  }, title), children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
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
  tone = "brand",
  subtle = false,
  dot = false,
  style,
  ...rest
}) {
  const map = {
    brand: {
      solid: "var(--color-brand)",
      tint: "var(--color-brand-tint)",
      ink: "var(--cmf-purple-800)"
    },
    accent: {
      solid: "var(--color-accent)",
      tint: "var(--cmf-teal-50)",
      ink: "var(--cmf-teal-deep)"
    },
    neutral: {
      solid: "var(--cmf-ink-500)",
      tint: "var(--cmf-ink-100)",
      ink: "var(--cmf-ink-700)"
    },
    success: {
      solid: "var(--cmf-success)",
      tint: "var(--cmf-success-bg)",
      ink: "#13643f"
    },
    warning: {
      solid: "var(--cmf-warning)",
      tint: "var(--cmf-warning-bg)",
      ink: "#8a5905"
    },
    danger: {
      solid: "var(--cmf-danger)",
      tint: "var(--cmf-danger-bg)",
      ink: "#922a1f"
    },
    navy: {
      solid: "var(--cmf-navy)",
      tint: "var(--cmf-info-bg)",
      ink: "var(--cmf-navy)"
    }
  };
  const c = map[tone] || map.brand;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-xs)",
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-wide)",
    lineHeight: 1,
    padding: "5px 10px",
    borderRadius: "var(--radius-pill)",
    background: subtle ? c.tint : c.solid,
    color: subtle ? c.ink : "var(--cmf-white)",
    whiteSpace: "nowrap",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: subtle ? c.solid : "currentColor"
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
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 var(--space-3)",
      height: 34,
      fontSize: "var(--fs-sm)"
    },
    md: {
      padding: "0 var(--space-5)",
      height: 42,
      fontSize: "var(--fs-body)"
    },
    lg: {
      padding: "0 var(--space-6)",
      height: 50,
      fontSize: "var(--fs-lg)"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-brand)",
      color: "var(--text-on-brand)",
      border: "var(--border-w) solid var(--color-brand)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-brand)",
      border: "var(--border-w-thick) solid var(--color-brand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-brand)",
      border: "var(--border-w-thick) solid transparent"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--text-on-brand)",
      border: "var(--border-w) solid var(--color-accent)"
    },
    danger: {
      background: "var(--cmf-danger)",
      color: "var(--text-on-brand)",
      border: "var(--border-w) solid var(--cmf-danger)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverShades = {
    primary: "var(--color-brand-strong)",
    accent: "var(--color-accent-deep)",
    danger: "#a5302433"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--color-brand-strong)";else if (variant === "accent") e.currentTarget.style.background = "var(--color-accent-deep)";else if (variant === "danger") e.currentTarget.style.filter = "brightness(0.92)";else e.currentTarget.style.background = "var(--color-brand-tint-faint)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.filter = "none";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
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
  accentColor = "var(--color-brand)",
  interactive = false,
  padding = "var(--space-5)",
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  const base = {
    position: "relative",
    background: "var(--surface-card)",
    border: "var(--border-w) solid var(--border-subtle)",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-sm)",
    padding,
    overflow: "hidden",
    transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
    cursor: interactive ? "pointer" : "default",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.borderColor = "var(--border-default)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    } : undefined
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--accent-bar-w)",
      background: accentColor
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Checkbox — controlled or uncontrolled, with inline label.
 */
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
  const fieldId = id || (label ? "c-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
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
      appearance: "none",
      WebkitAppearance: "none",
      width: 20,
      height: 20,
      marginTop: 1,
      flexShrink: 0,
      border: "var(--border-w-thick) solid var(--border-strong)",
      borderRadius: "var(--radius-xs)",
      background: "var(--surface-card)",
      cursor: "inherit",
      position: "relative",
      transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)"
    },
    onInput: e => {
      const on = e.currentTarget.checked;
      e.currentTarget.style.background = on ? "var(--color-brand)" : "var(--surface-card)";
      e.currentTarget.style.borderColor = on ? "var(--color-brand)" : "var(--border-strong)";
      e.currentTarget.style.backgroundImage = on ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")" : "none";
      e.currentTarget.style.backgroundRepeat = "no-repeat";
      e.currentTarget.style.backgroundPosition = "center";
    },
    ref: el => {
      if (el) {
        const on = el.checked;
        el.style.background = on ? "var(--color-brand)" : "var(--surface-card)";
        el.style.borderColor = on ? "var(--color-brand)" : "var(--border-strong)";
        el.style.backgroundImage = on ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")" : "none";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
      }
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: "var(--lh-snug)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Input — labelled text field with helper / error states.
 */
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  type = "text",
  prefix,
  style,
  ...rest
}) {
  const fieldId = id || (label ? "f-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cmf-danger)",
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--surface-card)",
      border: "var(--border-w) solid " + (invalid ? "var(--cmf-danger)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: "var(--space-3)",
      color: "var(--text-muted)",
      fontSize: "var(--fs-sm)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    "aria-invalid": invalid,
    style: {
      flex: 1,
      border: 0,
      outline: "none",
      background: "transparent",
      padding: "0 var(--space-3)",
      height: 42,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      minWidth: 0,
      ...style
    },
    onFocus: e => {
      const w = e.currentTarget.closest("div");
      w.style.borderColor = invalid ? "var(--cmf-danger)" : "var(--color-brand-soft)";
      w.style.boxShadow = "0 0 0 3px " + (invalid ? "var(--cmf-danger-bg)" : "var(--color-brand-tint)");
    },
    onBlur: e => {
      const w = e.currentTarget.closest("div");
      w.style.borderColor = invalid ? "var(--cmf-danger)" : "var(--border-default)";
      w.style.boxShadow = "none";
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: invalid ? "var(--cmf-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CMF Select — native dropdown styled to match Input.
 */
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
  const fieldId = id || (label ? "s-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cmf-danger)",
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    "aria-invalid": invalid,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 42,
      padding: "0 40px 0 var(--space-3)",
      background: "var(--surface-card)",
      border: "var(--border-w) solid " + (invalid ? "var(--cmf-danger)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      cursor: "pointer",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--color-brand-soft)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--color-brand-tint)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? "var(--cmf-danger)" : "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 11
    }
  }, "\u25BC")), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: invalid ? "var(--cmf-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/**
 * CMF Breadcrumb — government-portal trail. Pass items {label, href}.
 */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Migas de pan",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-2)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)"
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        color: last ? "var(--text-strong)" : "var(--text-muted)",
        fontWeight: last ? "var(--fw-semibold)" : "var(--fw-regular)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = "var(--text-link)";
        e.currentTarget.style.textDecoration = "underline";
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.textDecoration = "none";
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--border-default)"
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
      display: "flex",
      gap: "var(--space-5)",
      borderBottom: "var(--border-w) solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
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
        position: "relative",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        padding: "var(--space-3) 0",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-body)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        color: on ? "var(--color-brand)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--text-strong)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--text-muted)";
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-xs)",
        fontWeight: "var(--fw-semibold)",
        background: on ? "var(--color-brand-tint)" : "var(--cmf-ink-100)",
        color: on ? "var(--cmf-purple-800)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "2px 8px"
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: "var(--accent-bar-w)",
        background: "var(--color-brand)",
        borderRadius: "var(--radius-pill) var(--radius-pill) 0 0",
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transition: "transform var(--dur-base) var(--ease-out)"
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
  color = "currentColor",
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
      display: "block",
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
  h: "La Comisión",
  items: ["Quiénes somos", "Consejo", "Marco legal", "Cuenta pública"]
}, {
  h: "Mercados",
  items: ["Bancos e instituciones", "Valores y seguros", "Cooperativas", "Registros"]
}, {
  h: "Usuarios",
  items: ["Atención de público", "Presentar un reclamo", "Conoce tu deuda", "Alertas de fraude"]
}, {
  h: "Transparencia",
  items: ["Transparencia activa", "Solicitud de información", "Datos abiertos", "Auditorías"]
}];

/** CMF portal footer with sitemap, contact band and legal strip. */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: "var(--font-sans)",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cmf-navy)",
      color: "rgba(255,255,255,.82)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 24px 36px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cmf-logo-vertical-white.png",
    alt: "CMF",
    style: {
      height: 92,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-snug)",
      margin: 0,
      maxWidth: 240
    }
  }, "Av. Libertador Bernardo O'Higgins 1449, Santiago, Chile."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      margin: "10px 0 0",
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#fff",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15
  }), " 600 831 0000")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "#fff",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      margin: "0 0 14px"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: "rgba(255,255,255,.82)",
      textDecoration: "none",
      fontSize: "var(--fs-sm)",
      cursor: "pointer"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
      fontSize: "var(--fs-xs)",
      color: "rgba(255,255,255,.6)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Comisi\xF3n para el Mercado Financiero \xB7 Regulador y supervisor financiero de Chile"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: "rgba(255,255,255,.6)",
      cursor: "pointer"
    }
  }, "T\xE9rminos de uso"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "rgba(255,255,255,.6)",
      cursor: "pointer"
    }
  }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "rgba(255,255,255,.6)",
      cursor: "pointer"
    }
  }, "Accesibilidad"))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Header.jsx
try { (() => {
const NAV = ["Inicio", "Normativa", "Trámites", "Educación", "Estadísticas", "Sala de prensa"];

/** CMF portal masthead: government utility bar + main nav + search. */
function Header({
  active = "Inicio",
  onNavigate
}) {
  const go = label => onNavigate && onNavigate(label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cmf-navy)",
      color: "rgba(255,255,255,.85)",
      fontSize: "var(--fs-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: bar
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 14
  }), " Gobierno de Chile"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Transparencia"), /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Mapa del sitio"), /*#__PURE__*/React.createElement("a", {
    style: ulink
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "#fff",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13
  }), " 600 831 0000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      height: 84,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("Inicio"),
    style: {
      border: 0,
      background: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cmf-logo-horizontal-claim.jpg",
    alt: "Comisi\xF3n para el Mercado Financiero",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
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
    style: {
      ...iconBtn,
      position: "relative"
    },
    "aria-label": "Alertas"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 20,
    color: "var(--color-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 7,
      right: 7,
      width: 7,
      height: 7,
      background: "var(--cmf-teal)",
      borderRadius: "50%"
    }
  })), /*#__PURE__*/React.createElement("a", {
    style: portalBtn,
    onClick: () => go("Trámites")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 17,
    color: "#fff"
  }), " Portal de tr\xE1mites")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-xs)"
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
        position: "relative",
        border: 0,
        background: "none",
        cursor: "pointer",
        padding: "0 16px",
        height: 52,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sm)",
        fontWeight: on ? 700 : 600,
        color: on ? "var(--color-brand)" : "var(--text-body)",
        letterSpacing: ".01em"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 0,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: "var(--color-brand)",
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transition: "transform var(--dur-base) var(--ease-out)"
      }
    }));
  }))));
}
const bar = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px",
  display: "flex",
  justifyContent: "space-between",
  height: 36,
  alignItems: "center"
};
const ulink = {
  color: "rgba(255,255,255,.85)",
  textDecoration: "none",
  cursor: "pointer"
};
const iconBtn = {
  width: 42,
  height: 42,
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border-subtle)",
  background: "var(--surface-card)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
const portalBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "var(--color-brand)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "var(--fs-sm)",
  padding: "0 18px",
  height: 42,
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  textDecoration: "none"
};
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Home.jsx
try { (() => {
const SERVICES = [{
  icon: "fileText",
  t: "Presentar un reclamo",
  d: "Reclamos contra entidades fiscalizadas."
}, {
  icon: "search2",
  t: "Conoce tu deuda",
  d: "Consulta tu informe de deudas."
}, {
  icon: "shield",
  t: "Alertas de fraude",
  d: "Verifica entidades y evita estafas."
}, {
  icon: "scale",
  t: "Conoce tu seguro",
  d: "Pólizas y coberturas contratadas."
}, {
  icon: "building",
  t: "Entidades fiscalizadas",
  d: "Registro de bancos, valores y seguros."
}, {
  icon: "graduation",
  t: "Educación financiera",
  d: "Aprende a tomar mejores decisiones."
}];
const NEWS = [{
  tag: "Normativa",
  tone: "brand",
  t: "CMF publica norma sobre gestión de riesgos operacionales",
  d: "La nueva normativa actualiza los estándares para bancos e instituciones financieras.",
  date: "12 mar 2026"
}, {
  tag: "Comunicado",
  tone: "navy",
  t: "Resultados del sistema bancario a febrero de 2026",
  d: "El informe mensual presenta los principales indicadores de la industria.",
  date: "08 mar 2026"
}, {
  tag: "Educación",
  tone: "accent",
  t: "Nuevo simulador de crédito de consumo disponible",
  d: "Una herramienta para comparar y entender el costo total del crédito.",
  date: "03 mar 2026"
}];
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--cmf-navy)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Motif, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      padding: "72px 24px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: 700,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--cmf-teal-200)"
    }
  }, "Regulador y supervisor financiero de Chile"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: "var(--fs-h1)",
      lineHeight: 1.1,
      margin: "16px 0 12px",
      maxWidth: 560
    }
  }, "Un mercado financiero seguro, transparente y estable"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lg)",
      color: "rgba(255,255,255,.85)",
      lineHeight: "var(--lh-snug)",
      margin: "0 0 28px",
      maxWidth: 520
    }
  }, "Regulamos y supervisamos a las instituciones financieras para proteger a los usuarios y resguardar la fe p\xFAblica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: 6,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
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
      outline: "none",
      padding: "12px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary"
  }, "Buscar"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: -48,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: s.t,
    interactive: true,
    as: "a",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-md)",
      background: "var(--color-brand-tint)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 24,
    color: "var(--color-brand)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)"
    }
  }, s.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-snug)"
    }
  }, s.d)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 18,
    color: "var(--cmf-ink-300)",
    style: {
      marginLeft: "auto",
      alignSelf: "center"
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--cmf-warning-bg)",
      borderLeft: "4px solid var(--cmf-warning)",
      borderRadius: "var(--radius-sm)",
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 22,
    color: "var(--cmf-warning)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#8a5905"
    }
  }, "Alerta de mercado:"), " verifica siempre que una entidad est\xE9 inscrita en los registros de la CMF antes de contratar productos financieros."), /*#__PURE__*/React.createElement("a", {
    style: {
      marginLeft: "auto",
      whiteSpace: "nowrap",
      color: "var(--text-link)",
      fontWeight: 600,
      fontSize: "var(--fs-sm)",
      cursor: "pointer"
    }
  }, "Ver registro \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", {
    className: "cmf-rule",
    style: {
      height: 4,
      width: 56,
      background: "var(--color-brand)",
      border: 0,
      borderRadius: 999,
      margin: "0 0 10px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h2)"
    }
  }, "Sala de prensa")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNavigate && onNavigate("Sala de prensa")
  }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
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
      margin: "12px 0 8px",
      fontSize: "var(--fs-h4)",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, n.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-snug)"
    }
  }, n.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13,
    color: "var(--text-faint)"
  }), " ", n.date))))));
}

/**
 * Official 2026 CMF cover treatment: deep navy with the connected-network
 * texture extracted from the institutional PowerPoint master.
 */
function Motif({
  opacity = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      opacity,
      background: "#162d56 url('../../assets/backgrounds/cmf-network-texture.jpeg') center/cover no-repeat"
    }
  });
}
Object.assign(__ds_scope, { Home, Motif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Educa.jsx
try { (() => {
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
const SIM = [{
  icon: "scale",
  t: "Simulador de crédito",
  d: "Compara el costo total de un crédito de consumo."
}, {
  icon: "chart",
  t: "Simulador de ahorro",
  d: "Proyecta cuánto puedes acumular en el tiempo."
}, {
  icon: "shield",
  t: "Simulador de seguros",
  d: "Estima coberturas según tu perfil."
}];
const TOPICS = [{
  t: "Cómo elegir un crédito",
  tag: "Crédito",
  tone: "brand"
}, {
  t: "Entendiendo el CAE",
  tag: "Conceptos",
  tone: "navy"
}, {
  t: "Qué cubre tu seguro",
  tag: "Seguros",
  tone: "accent"
}, {
  t: "Evita fraudes y estafas",
  tag: "Seguridad",
  tone: "warning"
}, {
  t: "Tu primer presupuesto",
  tag: "Finanzas",
  tone: "brand"
}, {
  t: "Derechos del consumidor financiero",
  tag: "Derechos",
  tone: "navy"
}];
function Educa() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--surface-page)",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--cmf-navy)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Motif, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      padding: "56px 24px 60px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-lg)",
      background: "var(--cmf-teal)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "graduation",
    size: 34,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: 700,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--cmf-teal-200)"
    }
  }, "CMF Educa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      margin: "8px 0 8px",
      fontSize: "var(--fs-h1)"
    }
  }, "Educaci\xF3n financiera para todas y todos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,.88)",
      fontSize: "var(--fs-lg)",
      maxWidth: 620
    }
  }, "Herramientas, simuladores y contenidos para tomar mejores decisiones con tu dinero.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 18px",
      fontSize: "var(--fs-h3)"
    }
  }, "Simuladores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
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
      borderRadius: "var(--radius-md)",
      background: "var(--cmf-teal-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 24,
    color: "var(--cmf-teal-deep)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 6px",
      fontSize: "var(--fs-h4)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-snug)"
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
      margin: "0 0 18px",
      fontSize: "var(--fs-h3)"
    }
  }, "Aprende por tema"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
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
      margin: "12px 0 0",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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

// ui_kits/portal/ReclamoForm.jsx
try { (() => {
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
const STEPS = ["Identificación", "Tu reclamo", "Revisión"];
function ReclamoForm({
  onBack
}) {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--surface-page)",
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "22px 24px 22px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: "Inicio",
      href: "#"
    }, {
      label: "Trámites",
      href: "#"
    }, {
      label: "Presentar un reclamo"
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 6px",
      fontSize: "var(--fs-h2)"
    }
  }, "Presentar un reclamo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--fs-body)"
    }
  }, "Contra una entidad fiscalizada por la CMF."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 28,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, STEPS.map((s, i) => {
    const state = done ? "done" : i < step ? "done" : i === step ? "active" : "todo";
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 6px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--fs-sm)",
        fontWeight: 700,
        background: state === "todo" ? "var(--cmf-ink-100)" : "var(--color-brand)",
        color: state === "todo" ? "var(--text-muted)" : "#fff"
      }
    }, state === "done" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 15,
      color: "#fff"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-sm)",
        fontWeight: state === "active" ? 700 : 500,
        color: state === "active" ? "var(--text-strong)" : "var(--text-muted)"
      }
    }, s));
  }))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "var(--space-6)"
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--cmf-success-bg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 34,
    color: "var(--cmf-success)",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px"
    }
  }, "Reclamo ingresado"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      color: "var(--text-muted)"
    }
  }, "Folio de seguimiento"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-h3)",
      color: "var(--color-brand)",
      fontWeight: 700
    }
  }, "CMF-2026-048213"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onBack
  }, "Volver a tr\xE1mites")) : /*#__PURE__*/React.createElement(React.Fragment, null, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)"
    }
  }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "info"
  }, "Tus datos est\xE1n protegidos conforme a la normativa vigente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)"
    }
  }, "Detalle del reclamo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Descripci\xF3n ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cmf-danger)"
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "Describe lo ocurrido con el mayor detalle posible.",
    style: {
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      padding: 12,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      resize: "vertical",
      outline: "none"
    }
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)"
    }
  }, "Revisi\xF3n y env\xEDo"), /*#__PURE__*/React.createElement(__ds_scope.Alert, {
    tone: "warning",
    title: "Antes de enviar"
  }, "Revisa que la informaci\xF3n sea correcta. El reclamo ser\xE1 derivado a la entidad correspondiente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Declaro que la informaci\xF3n entregada es veraz y completa.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Autorizo a la CMF a comunicarme el estado del reclamo por correo."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 28,
      paddingTop: 20,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => step === 0 ? onBack && onBack() : setStep(step - 1)
  }, step === 0 ? "Cancelar" : "Atrás"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: () => step === 2 ? setDone(true) : setStep(step + 1)
  }, step === 2 ? "Enviar reclamo" : "Continuar"))))));
}
Object.assign(__ds_scope, { ReclamoForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/ReclamoForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Tramites.jsx
try { (() => {
const TRAMITES = [{
  icon: "fileText",
  t: "Presentar un reclamo",
  d: "Reclamos contra bancos, aseguradoras y otras entidades fiscalizadas.",
  tag: "En línea",
  tone: "success",
  time: "10 min"
}, {
  icon: "search2",
  t: "Conoce tu deuda",
  d: "Solicita tu informe consolidado de deudas del sistema financiero.",
  tag: "En línea",
  tone: "success",
  time: "Inmediato"
}, {
  icon: "shield",
  t: "Consulta de entidades fiscalizadas",
  d: "Verifica si una entidad está autorizada por la CMF.",
  tag: "En línea",
  tone: "success",
  time: "Inmediato"
}, {
  icon: "scale",
  t: "Conoce tu seguro",
  d: "Consulta las pólizas de seguro contratadas a tu nombre.",
  tag: "En línea",
  tone: "success",
  time: "Inmediato"
}, {
  icon: "building",
  t: "Inscripción en el Registro de Valores",
  d: "Trámite para emisores que requieren inscripción.",
  tag: "Con clave",
  tone: "navy",
  time: "Variable"
}, {
  icon: "download",
  t: "Certificado de vigencia",
  d: "Descarga certificados emitidos por la Comisión.",
  tag: "En línea",
  tone: "success",
  time: "5 min"
}];
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
function Tramites({
  onOpenReclamo
}) {
  const [tab, setTab] = React.useState("todos");
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--surface-page)",
      minHeight: "60vh",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "22px 24px 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: "Inicio",
      href: "#"
    }, {
      label: "Trámites y servicios"
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 8px",
      fontSize: "var(--fs-h1)"
    }
  }, "Tr\xE1mites y servicios"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      color: "var(--text-muted)",
      fontSize: "var(--fs-lg)",
      maxWidth: 640
    }
  }, "Realiza tr\xE1mites en l\xEDnea y accede a la informaci\xF3n que la CMF pone a disposici\xF3n de los usuarios."), /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: "todos",
      label: "Todos",
      count: 24
    }, {
      id: "usuarios",
      label: "Usuarios"
    }, {
      id: "entidades",
      label: "Entidades"
    }, {
      id: "certificados",
      label: "Certificados"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 24,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      padding: "0 12px",
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
      outline: "none",
      padding: "0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)"
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary"
  }, "M\xE1s filtros")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16
    }
  }, TRAMITES.map(x => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: x.t,
    interactive: true,
    onClick: x.t.includes("reclamo") ? onOpenReclamo : undefined,
    as: x.t.includes("reclamo") ? "button" : "div",
    style: x.t.includes("reclamo") ? {
      textAlign: "left",
      width: "100%",
      font: "inherit"
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-brand-tint)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
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
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)"
    }
  }, x.t), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: x.tone,
    subtle: true,
    dot: true
  }, x.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-snug)"
    }
  }, x.d), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
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
      alignSelf: "center"
    }
  }))))));
}
Object.assign(__ds_scope, { Tramites });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Tramites.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/doc-page.js", error: String((e && e.message) || e) }); }

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

__ds_ns.Motif = __ds_scope.Motif;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ReclamoForm = __ds_scope.ReclamoForm;

__ds_ns.Tramites = __ds_scope.Tramites;

})();
