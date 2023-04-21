/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => OpenGatePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian9 = require("obsidian");

// src/SetingTab.ts
var import_obsidian3 = require("obsidian");

// src/ModalEditGate.ts
var import_obsidian2 = require("obsidian");

// src/fns/formEditGate.ts
var import_obsidian = require("obsidian");

// src/fns/getSvgIcon.ts
var getSvgIcon = (siteUrl) => {
  const siteId = encodeURIComponent(btoa(siteUrl));
  return `<svg viewBox="0 0 100 100"><image href="https://fetch-favicon.fly.dev/favicon/${siteId}" height="100" width="100" /></svg>`;
};

// src/fns/normalizeGateOption.ts
var normalizeGateOption = (gate) => {
  if (gate.id === "") {
    let seedString = gate.url;
    if (gate.profileKey !== "open-gate" && gate.profileKey !== "") {
      seedString += gate.profileKey;
    }
    gate.id = btoa(seedString);
  }
  if (gate.profileKey === "" || gate.profileKey === void 0) {
    gate.profileKey = "open-gate";
  }
  if (gate.zoomFactor === 0 || gate.zoomFactor === void 0) {
    gate.zoomFactor = 1;
  }
  if (gate.icon === "") {
    gate.icon = getSvgIcon(gate.url);
  }
  if (gate.title === "") {
    gate.title = gate.url;
  }
  return gate;
};

// src/fns/formEditGate.ts
var formEditGate = (contentEl, gateOptions, onSubmit) => {
  new import_obsidian.Setting(contentEl).setName("URL").setClass("open-gate--form-field").addText((text) => text.setPlaceholder("https://example.com").setValue(gateOptions.url).onChange(async (value) => {
    gateOptions.url = value;
  }));
  new import_obsidian.Setting(contentEl).setName("Name").setClass("open-gate--form-field").addText((text) => text.setValue(gateOptions.title).onChange(async (value) => {
    gateOptions.title = value;
  }));
  new import_obsidian.Setting(contentEl).setName("Icon").setClass("open-gate--form-field").setDesc("Leave it blank to enable auto-detect").addText((text) => text.setValue(gateOptions.icon).onChange(async (value) => {
    gateOptions.icon = value;
  }));
  new import_obsidian.Setting(contentEl).setName("Pin to menu").setClass("open-gate--form-field").setDesc("If enabled, the gate will be pinned to the left bar").addToggle((text) => text.setValue(gateOptions.hasRibbon === true).onChange(async (value) => {
    gateOptions.hasRibbon = value;
  }));
  new import_obsidian.Setting(contentEl).setName("Position").setClass("open-gate--form-field").setDesc("What banner do you want to show?").addDropdown((text) => {
    var _a;
    return text.addOption("left", "Left").addOption("right", "Right").addOption("center", "Center").setValue((_a = gateOptions.position) != null ? _a : "right").onChange(async (value) => {
      gateOptions.position = value;
    });
  });
  const advancedOptions = contentEl.createDiv({
    cls: "open-gate--advanced-options"
  });
  new import_obsidian.Setting(contentEl).setName("Advanced Options").setClass("open-gate--form-field").addToggle((text) => text.setValue(false).onChange(async (value) => {
    if (value) {
      advancedOptions.addClass("open-gate--advanced-options--show");
    } else {
      advancedOptions.removeClass("open-gate--advanced-options--show");
    }
  }));
  new import_obsidian.Setting(advancedOptions).setName("User Agent").setClass("open-gate--form-field").setDesc("Leave it blank if you are not sure").addText((text) => {
    var _a;
    return text.setValue((_a = gateOptions.userAgent) != null ? _a : "").onChange(async (value) => {
      gateOptions.userAgent = value;
    });
  });
  new import_obsidian.Setting(advancedOptions).setName("Profile Key").setClass("open-gate--form-field").setDesc("It's like profiles in Chrome, gates with the same profile can share storage").addText((text) => {
    var _a;
    return text.setValue((_a = gateOptions.profileKey) != null ? _a : "").onChange(async (value) => {
      if (value === "") {
        value = "open-gate";
      }
      gateOptions.profileKey = value;
    });
  });
  new import_obsidian.Setting(advancedOptions).setName("Zoom Factor").setClass("open-gate--form-field").setDesc("Leave it blank if you are not sure").addText((text) => {
    var _a, _b;
    return text.setValue((_b = (_a = gateOptions.zoomFactor) == null ? void 0 : _a.toString()) != null ? _b : "0.0").onChange(async (value) => {
      gateOptions.zoomFactor = parseFloat(value);
    });
  });
  new import_obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText(gateOptions.id ? "Update the gate" : "Create new gate").setCta().onClick(async () => {
    gateOptions = normalizeGateOption(gateOptions);
    onSubmit(gateOptions);
  }));
};

// src/ModalEditGate.ts
var ModalEditGate = class extends import_obsidian2.Modal {
  constructor(app, gateOptions, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
    this.gateOptions = gateOptions;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: "Open Gate" });
    formEditGate(contentEl, this.gateOptions, (result) => {
      this.onSubmit(result);
      this.close();
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/fns/createEmptyGateOption.ts
var createEmptyGateOption = () => {
  return {
    id: "",
    title: "",
    icon: "",
    hasRibbon: true,
    position: "right",
    profileKey: "open-gate",
    url: "",
    zoomFactor: 1,
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57"
  };
};

// src/SetingTab.ts
var SettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  async updateGate(gate) {
    await this.plugin.addGate(gate);
    this.display();
  }
  display() {
    this.shouldNotify = false;
    const { containerEl } = this;
    containerEl.empty();
    if (import_obsidian3.Platform.isMobileApp) {
      containerEl.createEl("div", {
        text: "On mobile, some websites may not work. it is a limitation of Obsidian Mobile. Please use Obsidian Desktop instead. Follow me on Twitter to get the latest updates about the issue: ",
        cls: "open-gate-mobile-warning"
      }).createEl("a", {
        text: "@duocdev",
        cls: "open-gate-mobile-link",
        href: "https://twitter.com/duocdev"
      });
    }
    containerEl.createEl("button", { text: "New gate", cls: "mod-cta" }).addEventListener("click", () => {
      new ModalEditGate(this.app, createEmptyGateOption(), this.updateGate.bind(this)).open();
    });
    containerEl.createEl("hr");
    const settingContainerEl = containerEl.createDiv("setting-container");
    for (const gateId in this.plugin.settings.gates) {
      const gate = this.plugin.settings.gates[gateId];
      const gateEl = settingContainerEl.createEl("div", {
        attr: {
          "data-gate-id": gate.id
        }
      });
      new import_obsidian3.Setting(gateEl).setName(gate.title).setDesc(gate.url).addButton((button) => {
        button.setButtonText("Delete").onClick(async () => {
          await this.plugin.removeGate(gateId);
          gateEl.remove();
        });
      }).addButton((button) => {
        button.setButtonText("Edit").onClick(() => {
          new ModalEditGate(this.app, gate, this.updateGate.bind(this)).open();
        });
      });
    }
    containerEl.createEl("h3", { text: "Help" });
    containerEl.createEl("small", {
      attr: {
        style: "display: block; margin-bottom: 5px"
      },
      text: "When delete or edit a gate, you need to reload Obsidian to see the changes."
    });
    containerEl.createEl("small", {
      attr: {
        style: "display: block; margin-bottom: 1em;"
      },
      text: `To reload Obsidian, you can use the menu "view -> Force reload" or "Reload App" in the command palette.`
    });
    new import_obsidian3.Setting(containerEl).setName("Follow me on Twitter").setDesc("@duocdev").addButton((button) => {
      button.setCta();
      button.setButtonText("Follow for update").onClick(() => {
        window.open("https://twitter.com/duocdev");
      });
    }).addButton((button) => {
      button.buttonEl.outerHTML = "<a href='https://paypal.me/duocnguyen' target='_blank'><img style='border:0px;height:35px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' /></a>";
    });
  }
};

// src/GateView.ts
var import_obsidian4 = require("obsidian");

// src/fns/createWebviewTag.ts
var createWebviewTag = (params) => {
  const webviewTag = document.createElement("webview");
  webviewTag.setAttribute("allowpopups", "true");
  webviewTag.setAttribute("partition", "persist:" + params.profileKey);
  webviewTag.setAttribute("src", params.url);
  webviewTag.addClass("open-gate-webview");
  if (params.userAgent) {
    webviewTag.setAttribute("useragent", params.userAgent);
  }
  webviewTag.addEventListener("did-attach", () => {
    if (params.zoomFactor) {
      webviewTag.setZoomFactor(params.zoomFactor);
    }
  });
  return webviewTag;
};

// src/GateView.ts
var import_obsidian5 = require("obsidian");

// src/fns/createIframe.ts
var createIframe = (url) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowpopups", "");
  iframe.setAttribute("credentialless", "true");
  iframe.setAttribute("src", url);
  iframe.addClass("open-gate-iframe");
  return iframe;
};

// src/GateView.ts
var GateView = class extends import_obsidian4.ItemView {
  constructor(leaf, options) {
    super(leaf);
    this.useIframe = false;
    this.navigation = false;
    this.options = options;
    this.useIframe = import_obsidian5.Platform.isMobileApp;
  }
  addActions() {
    this.addAction("refresh-ccw", "Reload", () => {
      if (this.frame instanceof HTMLIFrameElement) {
        this.frame.src = this.frame.src;
      } else {
        this.frame.reload();
      }
    });
    this.addAction("home", "Home page", () => {
      var _a, _b, _c, _d;
      if (this.frame instanceof HTMLIFrameElement) {
        this.frame.src = (_b = (_a = this.options) == null ? void 0 : _a.url) != null ? _b : "about:blank";
      } else {
        this.frame.loadURL((_d = (_c = this.options) == null ? void 0 : _c.url) != null ? _d : "about:blank");
      }
    });
  }
  isWebviewFrame() {
    return this.frame instanceof HTMLIFrameElement;
  }
  onload() {
    super.onload();
    this.addActions();
    this.contentEl.empty();
    this.contentEl.addClass("open-gate-view");
    if (this.useIframe) {
      this.frame = createIframe(this.options.url);
    } else {
      this.frame = createWebviewTag(this.options);
    }
    this.contentEl.appendChild(this.frame);
    if (this.frame instanceof HTMLIFrameElement) {
    } else {
      this.frame.addEventListener("will-navigate", this.webViewWillNavigate.bind(this));
      this.frame.addEventListener("console-message", async (event) => {
        if (event.message.startsWith("open-gate-open:")) {
          const url = event.message.replace("open-gate-open:", "");
          window.open(url);
        }
      });
      this.frame.addEventListener("dom-ready", async () => {
        const frame = this.frame;
        await frame.executeJavaScript(`
                document.addEventListener('click', (e) => {
                    if (e.target instanceof HTMLAnchorElement && e.target.target === '_blank') {
                        e.preventDefault();
                        console.log('open-gate-open:'+e.target.href);
                    }
                });`);
      });
    }
  }
  onunload() {
    this.frame.remove();
    if (this.frame instanceof HTMLIFrameElement) {
    } else {
      this.frame.removeEventListener("will-navigate", this.webViewWillNavigate.bind(this));
    }
    super.onunload();
  }
  webViewWillNavigate(event, url) {
  }
  onPaneMenu(menu, source) {
    super.onPaneMenu(menu, source);
    menu.addItem((item) => {
      item.setTitle("Reload");
      item.setIcon("refresh-ccw");
      item.onClick(() => {
        if (this.frame instanceof HTMLIFrameElement) {
          this.frame.src = this.frame.src;
        } else {
          this.frame.reload();
        }
      });
    });
    menu.addItem((item) => {
      item.setTitle("Home page");
      item.setIcon("home");
      item.onClick(() => {
        var _a, _b, _c, _d;
        if (this.frame instanceof HTMLIFrameElement) {
          this.frame.src = (_b = (_a = this.options) == null ? void 0 : _a.url) != null ? _b : "about:blank";
        } else {
          this.frame.loadURL((_d = (_c = this.options) == null ? void 0 : _c.url) != null ? _d : "about:blank");
        }
      });
    });
    menu.addItem((item) => {
      item.setTitle("Toggle DevTools");
      item.setIcon("file-cog");
      item.onClick(() => {
        if (this.frame instanceof HTMLIFrameElement) {
          return;
        }
        if (this.frame.isDevToolsOpened()) {
          this.frame.closeDevTools();
        } else {
          this.frame.openDevTools();
        }
      });
    });
  }
  getViewType() {
    var _a, _b;
    return (_b = (_a = this.options) == null ? void 0 : _a.id) != null ? _b : "gate";
  }
  getDisplayText() {
    var _a, _b;
    return (_b = (_a = this.options) == null ? void 0 : _a.title) != null ? _b : "Gate";
  }
  getIcon() {
    var _a, _b, _c;
    if ((_a = this.options) == null ? void 0 : _a.icon.startsWith("<svg")) {
      return this.options.id;
    }
    return (_c = (_b = this.options) == null ? void 0 : _b.icon) != null ? _c : "globe";
  }
};

// src/fns/openView.ts
var openView = async (workspace, id, position) => {
  let leaf;
  let leafs = workspace.getLeavesOfType(id);
  if (leafs.length > 0) {
    workspace.revealLeaf(leafs[0]);
    return;
  }
  leaf = await createView(workspace, id, position);
  workspace.revealLeaf(leaf);
  return;
};
var createView = async (workspace, id, position) => {
  let leaf;
  switch (position) {
    case "left":
      leaf = workspace.getLeftLeaf(false);
      break;
    case "center":
      leaf = workspace.getLeaf(false);
      break;
    case "right":
    default:
      leaf = workspace.getRightLeaf(false);
      break;
  }
  await (leaf == null ? void 0 : leaf.setViewState({ type: id, active: true }));
  return leaf;
};

// src/fns/registerGate.ts
var import_obsidian6 = require("obsidian");
var registerGate = (plugin, options) => {
  plugin.registerView(options.id, (leaf) => {
    return new GateView(leaf, options);
  });
  let iconName = options.icon;
  if (options.icon.startsWith("<svg")) {
    (0, import_obsidian6.addIcon)(options.id, options.icon);
    iconName = options.id;
  }
  if (options.hasRibbon) {
    plugin.addRibbonIcon(iconName, options.title, async (evt) => openView(plugin.app.workspace, options.id, options.position));
  }
  plugin.addCommand({
    id: `open-gate-${btoa(options.url)}`,
    name: `Open gate ${options.title}`,
    callback: async () => await openView(plugin.app.workspace, options.id, options.position)
  });
};

// src/ModalOnboarding.ts
var import_obsidian7 = require("obsidian");
var ModalOnBoarding = class extends import_obsidian7.Modal {
  constructor(app, gateOptions, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
    this.gateOptions = gateOptions;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: "Welcome to OpenGate" });
    contentEl.createEl("p", {
      text: "OpenGate is a plugin that allows you to embed any website in Obsidian. You will never have to leave Obsidian again!"
    });
    contentEl.createEl("p", {
      text: "But now you have to create your first gate."
    });
    formEditGate(contentEl, this.gateOptions, (result) => {
      this.onSubmit(result);
      this.close();
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/fns/unloadView.ts
var unloadView = async (workspace, gate) => {
  workspace.detachLeavesOfType(gate.id);
  const ribbonIcons = workspace.containerEl.querySelector(`div[aria-label="${gate.title}"]`);
  if (ribbonIcons) {
    ribbonIcons.remove();
  }
};

// src/ModalListGates.ts
var import_obsidian8 = require("obsidian");
var ModalListGates = class extends import_obsidian8.Modal {
  constructor(app, gates, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
    this.gates = gates;
  }
  onOpen() {
    const { contentEl } = this;
    for (const gateId in this.gates) {
      const gate = this.gates[gateId];
      const container = contentEl.createEl("div", {
        cls: "open-gate--quick-list-item"
      });
      container.createEl(`svg`, { cls: "svg-icon" }).innerHTML = gate.icon;
      container.createEl("span", { text: gate.title });
      container.addEventListener("click", async () => {
        await openView(this.app.workspace, gate.id, gate.position);
        this.close();
      });
    }
  }
};

// src/main.ts
var DEFAULT_SETTINGS = {
  uuid: "",
  gates: {}
};
var defaultGateOption = {
  profileKey: "open-gate",
  zoomFactor: 1,
  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57"
};
var OpenGatePlugin = class extends import_obsidian9.Plugin {
  async onload() {
    await this.loadSettings();
    if (this.settings.uuid === "") {
      this.settings.uuid = this.generateUuid();
      await this.saveSettings();
      if (Object.keys(this.settings.gates).length === 0) {
        new ModalOnBoarding(this.app, createEmptyGateOption(), async (gate) => {
          await this.addGate(gate);
        }).open();
      }
    }
    for (const gateId in this.settings.gates) {
      const gate = this.settings.gates[gateId];
      registerGate(this, gate);
    }
    this.addSettingTab(new SettingTab(this.app, this));
    this.addCommand({
      id: `open-gate-create-new`,
      name: `Create new gate`,
      callback: async () => {
        new ModalEditGate(this.app, createEmptyGateOption(), async (gate) => {
          await this.addGate(gate);
        }).open();
      }
    });
    this.addCommand({
      id: `open-list-gates-modal`,
      name: `List Gates`,
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "g" }],
      callback: async () => {
        new ModalListGates(this.app, this.settings.gates, async (gate) => {
          await this.addGate(gate);
        }).open();
      }
    });
  }
  onunload() {
  }
  async addGate(gate) {
    if (!this.settings.gates.hasOwnProperty(gate.id)) {
      registerGate(this, gate);
    } else {
      new import_obsidian9.Notice("This change will take effect after you reload Obsidian.");
    }
    if (gate.profileKey === "" || gate.profileKey === void 0) {
      gate.profileKey = defaultGateOption.profileKey;
    }
    if (gate.zoomFactor === 0 || gate.zoomFactor === void 0) {
      gate.zoomFactor = defaultGateOption.zoomFactor;
    }
    this.settings.gates[gate.id] = gate;
    await this.saveSettings();
  }
  async removeGate(gateId) {
    if (!this.settings.gates[gateId]) {
      new import_obsidian9.Notice("Gate not found");
    }
    const gate = this.settings.gates[gateId];
    await unloadView(this.app.workspace, gate);
    delete this.settings.gates[gateId];
    await this.saveSettings();
    new import_obsidian9.Notice("This change will take effect after you reload Obsidian.");
  }
  async loadSettings() {
    this.settings = await this.loadData();
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...this.settings
    };
    if (!this.settings.gates) {
      this.settings.gates = {};
    }
    for (const gateId in this.settings.gates) {
      this.settings.gates[gateId] = normalizeGateOption(this.settings.gates[gateId]);
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  generateUuid() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
};
