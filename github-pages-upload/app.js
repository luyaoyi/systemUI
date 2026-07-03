const activities = [
  {
    name: "汽车票下一程立减 5 元",
    code: "BUS_REPURCHASE_202607",
    status: "有效",
    time: "2026-07-01 00:00 - 2026-08-31 23:59",
    channels: ["同程主小程序(852)", "同程APP-IOS(433)", "同程APP-安卓(434)"],
    amount: "¥5.00",
    validDays: 1,
    priority: 90,
    total: 1286,
    pending: 312,
    used: 641,
    updatedAt: "2026-07-02 11:26",
    owner: "卢堯燚"
  },
  {
    name: "暑期返程复购立减 8 元",
    code: "BUS_REPURCHASE_SUMMER",
    status: "有效",
    time: "2026-07-10 00:00 - 2026-08-20 23:59",
    channels: ["同程主小程序(852)", "同程APP-IOS(433)"],
    amount: "¥8.00",
    validDays: 2,
    priority: 80,
    total: 0,
    pending: 0,
    used: 0,
    updatedAt: "2026-07-01 18:42",
    owner: "运营A"
  },
  {
    name: "端午复购立减活动",
    code: "BUS_REPURCHASE_202606",
    status: "无效",
    time: "2026-06-01 00:00 - 2026-06-30 23:59",
    channels: ["同程主小程序(852)", "同程APP-安卓(434)"],
    amount: "¥3.00",
    validDays: 1,
    priority: 50,
    total: 934,
    pending: 0,
    used: 372,
    updatedAt: "2026-06-30 23:59",
    owner: "运营B"
  },
  {
    name: "供应商联合复购立减",
    code: "BUS_REPURCHASE_SUPPLIER",
    status: "无效",
    time: "2026-07-01 00:00 - 2026-07-31 23:59",
    channels: ["同程APP-IOS(433)"],
    amount: "¥6.00",
    validDays: 3,
    priority: 70,
    total: 216,
    pending: 58,
    used: 102,
    updatedAt: "2026-07-02 09:13",
    owner: "卢堯燚"
  }
];

const benefits = [
  {
    id: "RB202607020001",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "88231690",
    uid: "U100091",
    firstOrder: "B20260702081123001",
    secondOrder: "B20260702143009021",
    channel: "同程APP-IOS(433)",
    amount: "¥5.00",
    status: "已使用",
    couponStatus: "成功",
    couponId: "CPN7788123",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "-",
    participateTime: "2026-07-02 08:11:24",
    effectiveTime: "2026-07-02 12:02:09",
    expireTime: "2026-07-03 23:59:59",
    updateTime: "2026-07-02 14:30:16"
  },
  {
    id: "RB202607020002",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "66120031",
    uid: "U100122",
    firstOrder: "B20260702091458011",
    secondOrder: "",
    channel: "同程主小程序(852)",
    amount: "¥5.00",
    status: "待使用",
    couponStatus: "成功",
    couponId: "CPN7788490",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "-",
    participateTime: "2026-07-02 09:15:03",
    effectiveTime: "2026-07-02 13:16:44",
    expireTime: "2026-07-03 23:59:59",
    updateTime: "2026-07-02 13:16:47"
  },
  {
    id: "RB202607020003",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "55203918",
    uid: "U100215",
    firstOrder: "B20260702101540991",
    secondOrder: "",
    channel: "同程APP-安卓(434)",
    amount: "¥5.00",
    status: "初始化",
    couponStatus: "未发放",
    couponId: "",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "-",
    participateTime: "2026-07-02 10:15:41",
    effectiveTime: "",
    expireTime: "",
    updateTime: "2026-07-02 10:15:41"
  },
  {
    id: "RB202607010117",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "71932004",
    uid: "U100311",
    firstOrder: "B20260701074122102",
    secondOrder: "",
    channel: "同程APP-IOS(433)",
    amount: "¥5.00",
    status: "已过期",
    couponStatus: "成功",
    couponId: "CPN7781020",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "-",
    participateTime: "2026-07-01 07:41:23",
    effectiveTime: "2026-07-01 10:10:11",
    expireTime: "2026-07-02 23:59:59",
    updateTime: "2026-07-02 23:59:59"
  },
  {
    id: "RB202607020004",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "89213367",
    uid: "U100419",
    firstOrder: "B20260702112209140",
    secondOrder: "",
    channel: "同程主小程序(852)",
    amount: "¥5.00",
    status: "待使用",
    couponStatus: "失败",
    couponId: "",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "营销平台发券超时",
    participateTime: "2026-07-02 11:22:10",
    effectiveTime: "2026-07-02 12:42:31",
    expireTime: "2026-07-03 23:59:59",
    updateTime: "2026-07-02 12:42:35"
  },
  {
    id: "RB202607020005",
    activityCode: "BUS_REPURCHASE_202607",
    mid: "33198200",
    uid: "U100511",
    firstOrder: "B20260702120533418",
    secondOrder: "",
    channel: "同程APP-IOS(433)",
    amount: "¥5.00",
    status: "已无效",
    couponStatus: "未发放",
    couponId: "",
    couponTemplate: "CPN_BUS_REBUY_5",
    failReason: "-",
    participateTime: "2026-07-02 12:05:34",
    effectiveTime: "",
    expireTime: "",
    updateTime: "2026-07-02 12:18:03"
  }
];

const pageTitleMap = {
  manage: "活动管理",
  form: "活动配置",
  data: "活动数据"
};

const claimActivityPrizes = {
  CLAIM_BUS_REBUY_5: [
    { name: "汽车票下一程立减券", type: "满减", value: "5 元", threshold: "满 0 元可用" },
    { name: "汽车票会员加速包", type: "折扣", value: "9 折", threshold: "汽车票订单可用" }
  ],
  CLAIM_BUS_REBUY_10: [
    { name: "汽车票复购 10 元券", type: "满减", value: "10 元", threshold: "满 50 元可用" },
    { name: "周末出行折扣券", type: "折扣", value: "8.8 折", threshold: "满 30 元可用" }
  ],
  CLAIM_BUS_RETURN: [
    { name: "汽车票返程优惠券", type: "满减", value: "8 元", threshold: "返程订单满 40 元可用" }
  ],
  CLAIM_BUS_WEEKEND: [
    { name: "周末汽车票 6 元券", type: "满减", value: "6 元", threshold: "满 30 元可用" },
    { name: "周末夜间班次折扣券", type: "折扣", value: "8.5 折", threshold: "18:00 后班次可用" },
    { name: "接驳线路专享券", type: "满减", value: "3 元", threshold: "机场高铁接驳线路可用" }
  ],
  CLAIM_BUS_MEMBER: [
    { name: "会员复购折扣券", type: "折扣", value: "9.2 折", threshold: "会员用户可用" },
    { name: "会员无门槛立减券", type: "满减", value: "4 元", threshold: "满 0 元可用" }
  ]
};

function statusClass(status) {
  return {
    "有效": "status-running",
    "无效": "status-invalid",
    "已使用": "status-used",
    "待使用": "status-running",
    "初始化": "status-init",
    "已过期": "status-expired",
    "已无效": "status-invalid",
    "异常": "status-invalid"
  }[status] || "status-paused";
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function switchPage(page) {
  document.querySelectorAll(".page").forEach((node) => node.classList.remove("page-active"));
  document.querySelector(`#${page}Page`).classList.add("page-active");
  document.querySelectorAll(".side-item").forEach((node) => {
    node.classList.toggle("active", node.dataset.page === page);
  });
  document.querySelector("#pageTitle").textContent = pageTitleMap[page];
  document.querySelector("#createBtn").style.display = page === "manage" ? "" : "none";
}

function renderActivities(list = activities) {
  const tbody = document.querySelector("#activityTable");
  tbody.innerHTML = list
    .map((item) => {
      const tags = item.channels.map((channel) => `<span class="tag">${channel}</span>`).join("");
      return `
        <tr>
          <td>
            <div class="name-cell">
              <strong>${item.name}</strong>
              <small>${item.owner}</small>
            </div>
          </td>
          <td>${item.code}</td>
          <td>${item.time}</td>
          <td><div class="tag-list">${tags}</div></td>
          <td>${item.amount}</td>
          <td>${item.validDays} 天</td>
          <td>${item.priority}</td>
          <td>${item.total.toLocaleString()}</td>
          <td>${item.pending.toLocaleString()}</td>
          <td>${item.used.toLocaleString()}</td>
          <td>${item.updatedAt}</td>
          <td>
            <div class="row-actions">
              <button class="text-btn" data-action="edit" data-code="${item.code}">编辑</button>
              <button class="text-btn" data-action="copy" data-code="${item.code}">复制</button>
              <button class="text-btn" data-action="data" data-code="${item.code}">数据</button>
              <button class="text-btn" data-action="log" data-code="${item.code}">日志</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderBenefits(list = benefits) {
  const tbody = document.querySelector("#benefitTable");
  tbody.innerHTML = list
    .map(
      (item) => `
        <tr>
          <td><button class="text-btn" data-benefit="${item.id}">${item.id}</button></td>
          <td>${item.mid}</td>
          <td>${item.firstOrder}</td>
          <td>${item.secondOrder || "-"}</td>
          <td>${item.channel}</td>
          <td>${item.amount}</td>
          <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
          <td><span class="status-pill ${item.couponStatus === "成功" ? "status-running" : item.couponStatus === "失败" ? "status-invalid" : "status-paused"}">${item.couponStatus}</span></td>
          <td>${item.participateTime}</td>
          <td>${item.effectiveTime || "-"}</td>
          <td>${item.expireTime || "-"}</td>
          <td>
            <div class="row-actions">
              <button class="text-btn" data-benefit="${item.id}">详情</button>
              ${item.couponStatus === "失败" && item.status === "待使用" ? `<button class="text-btn" data-retry="${item.id}">重试发券</button>` : ""}
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function filterActivities() {
  const keyword = document.querySelector("#filterKeyword").value.trim().toLowerCase();
  const status = document.querySelector("#filterStatus").value;
  const channel = document.querySelector("#filterChannel").value;
  const owner = document.querySelector("#filterOwner").value.trim();
  const result = activities.filter((item) => {
    const matchKeyword = !keyword || item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword);
    const matchStatus = !status || item.status === status;
    const matchChannel = !channel || item.channels.includes(channel);
    const matchOwner = !owner || item.owner.includes(owner);
    return matchKeyword && matchStatus && matchChannel && matchOwner;
  });
  renderActivities(result);
  showToast(`查询到 ${result.length} 条活动`);
}

function filterBenefits() {
  const benefitKeyword = document.querySelector("#benefitKeyword").value.trim();
  const userKeyword = document.querySelector("#userKeyword").value.trim();
  const firstOrderKeyword = document.querySelector("#firstOrderKeyword").value.trim();
  const secondOrderKeyword = document.querySelector("#secondOrderKeyword").value.trim();
  const status = document.querySelector("#benefitStatusFilter").value;
  const couponStatus = document.querySelector("#couponStatusFilter").value;
  const result = benefits.filter((item) => {
    return (
      (!benefitKeyword || item.id.includes(benefitKeyword)) &&
      (!userKeyword || item.mid.includes(userKeyword)) &&
      (!firstOrderKeyword || item.firstOrder.includes(firstOrderKeyword)) &&
      (!secondOrderKeyword || item.secondOrder.includes(secondOrderKeyword)) &&
      (!status || item.status === status) &&
      (!couponStatus || item.couponStatus === couponStatus)
    );
  });
  renderBenefits(result);
  showToast(`查询到 ${result.length} 条参与记录`);
}

function section(title, rows) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <div class="detail-grid">
        ${rows.map(([label, value]) => `<span>${label}</span><strong>${value || "-"}</strong>`).join("")}
      </div>
    </section>
  `;
}

function openDrawer(id) {
  const item = benefits.find((benefit) => benefit.id === id);
  if (!item) return;
  document.querySelector("#drawerSubTitle").textContent = `${item.id} · ${item.status}`;
  document.querySelector("#drawerBody").innerHTML = `
    ${section("权益信息", [
      ["权益 ID", item.id],
      ["活动 Code", item.activityCode],
      ["权益金额", item.amount],
      ["权益状态", item.status],
      ["参与时间", item.participateTime],
      ["生效时间", item.effectiveTime],
      ["过期时间", item.expireTime],
      ["状态更新时间", item.updateTime]
    ])}
    ${section("用户与订单", [
      ["mid", item.mid],
      ["uid", item.uid],
      ["第一单订单号", item.firstOrder],
      ["第二单订单号", item.secondOrder],
      ["业务类型", "汽车票"],
      ["渠道", item.channel]
    ])}
    ${section("代金券信息", [
      ["模板 ID", item.couponTemplate],
      ["券 ID", item.couponId],
      ["发放状态", item.couponStatus],
      ["失败原因", item.failReason]
    ])}
  `;
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  document.body.classList.remove("drawer-open");
}

function syncConditionPanels() {
  document.querySelectorAll("[data-condition]").forEach((checkbox) => {
    const panel = document.querySelector(`[data-condition-panel="${checkbox.dataset.condition}"]`);
    if (!panel) return;
    panel.classList.toggle("hidden", !checkbox.checked);
    panel.querySelectorAll("[data-condition-required]").forEach((input) => {
      input.required = checkbox.checked;
      if (!checkbox.checked) input.value = "";
    });
  });
}

function syncQuotaPanels() {
  document.querySelectorAll("[data-quota]").forEach((checkbox) => {
    const panel = document.querySelector(`[data-quota-panel="${checkbox.dataset.quota}"]`);
    const input = panel?.querySelector("input");
    if (!panel || !input) return;
    panel.classList.toggle("hidden", !checkbox.checked);
    input.required = checkbox.checked;
    if (!checkbox.checked) input.value = "";
  });
}

function renderMultiSelect(wrapper) {
  const tags = wrapper.querySelector("[data-multi-tags]");
  const input = wrapper.querySelector("[data-multi-input]");
  const selected = [...wrapper.querySelectorAll("[data-multi-option].selected")].map((option) => option.dataset.value);
  if (!tags || !input) return;
  tags.innerHTML = selected
    .map(
      (value) =>
        `<span class="search-select-tag">${value}<button type="button" data-multi-remove data-value="${value}">×</button></span>`
    )
    .join("");
  input.placeholder = selected.length ? "继续搜索并选择" : wrapper.dataset.placeholder || "搜索并选择";
}

function filterMultiSelect(wrapper, keyword = "") {
  const query = keyword.trim().toLowerCase();
  wrapper.querySelectorAll("[data-multi-option]").forEach((option) => {
    option.hidden = query ? !option.dataset.value.toLowerCase().includes(query) : false;
  });
}

function openMultiSelect(wrapper) {
  closeAllMultiSelects(wrapper);
  wrapper.classList.add("open");
  const input = wrapper.querySelector("[data-multi-input]");
  filterMultiSelect(wrapper, input?.value || "");
}

function closeAllMultiSelects(exception) {
  document.querySelectorAll("[data-multi-select]").forEach((wrapper) => {
    if (wrapper === exception) return;
    wrapper.classList.remove("open");
    const input = wrapper.querySelector("[data-multi-input]");
    if (input) input.value = "";
    filterMultiSelect(wrapper, "");
  });
}

function resetMultiSelect(wrapper) {
  wrapper.querySelectorAll("[data-multi-option]").forEach((option) => option.classList.remove("selected"));
  const input = wrapper.querySelector("[data-multi-input]");
  if (input) input.value = "";
  renderMultiSelect(wrapper);
  filterMultiSelect(wrapper, "");
}

function filterClaimOptions(keyword = "") {
  const query = keyword.trim().toLowerCase();
  document.querySelectorAll("[data-claim-option]").forEach((option) => {
    const searchable = `${option.dataset.value || ""} ${option.dataset.name || ""} ${option.textContent || ""}`.toLowerCase();
    option.hidden = query ? !searchable.includes(query) : false;
  });
}

function openClaimSelect() {
  const wrapper = document.querySelector("[data-claim-select]");
  if (!wrapper) return;
  wrapper.classList.add("open");
  filterClaimOptions(document.querySelector("[data-claim-activity-input]")?.value || "");
}

function closeClaimSelect() {
  document.querySelector("[data-claim-select]")?.classList.remove("open");
}

function selectClaimActivity(option) {
  const input = document.querySelector("[data-claim-activity-input]");
  if (!input) return;
  input.value = `${option.dataset.value}｜${option.dataset.name}`;
  document.querySelectorAll("[data-claim-option]").forEach((item) => item.classList.remove("selected"));
  option.classList.add("selected");
  closeClaimSelect();
  syncClaimPrizes();
}

function initializeMultiSelects(root = document) {
  root.querySelectorAll("[data-multi-select]").forEach((wrapper) => {
    renderMultiSelect(wrapper);
    filterMultiSelect(wrapper, "");
  });
}

function refreshLineTagRules() {
  const list = document.querySelector(".tag-rule-list");
  if (!list) return;
  list.querySelectorAll(".group-separator").forEach((separator) => separator.remove());
  [...list.querySelectorAll(".tag-rule-row")].forEach((row, index) => {
    row.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.name = `lineTagLogic${index + 1}`;
    });
    if (index > 0) {
      const separator = document.createElement("div");
      separator.className = "group-separator";
      separator.innerHTML = "<span>或</span>";
      row.before(separator);
    }
  });
}

function addLineTagRule() {
  const list = document.querySelector(".tag-rule-list");
  const template = list?.querySelector(".tag-rule-row");
  if (!list || !template) return;
  const next = template.cloneNode(true);
  next.querySelectorAll("[data-multi-select]").forEach((wrapper) => {
    resetMultiSelect(wrapper);
  });
  list.append(next);
  refreshLineTagRules();
  initializeMultiSelects(next);
}

function removeLineTagRule(button) {
  const list = document.querySelector(".tag-rule-list");
  const rows = list ? [...list.querySelectorAll(".tag-rule-row")] : [];
  if (rows.length <= 1) {
    showToast("至少保留一个标签条件");
    return;
  }
  button.closest(".tag-rule-row")?.remove();
  refreshLineTagRules();
}

function addCityCombo() {
  const list = document.querySelector(".city-combo-list");
  const template = list?.querySelector(".city-combo-card");
  if (!list || !template) return;
  const next = template.cloneNode(true);
  next.querySelectorAll("input:not([data-multi-input])").forEach((input) => {
    input.value = "";
  });
  next.querySelectorAll("select").forEach((select) => {
    select.selectedIndex = 0;
  });
  next.querySelectorAll("[data-multi-select]").forEach((wrapper) => {
    resetMultiSelect(wrapper);
  });
  list.append(next);
  initializeMultiSelects(next);
}

function removeCityCombo(button) {
  const list = document.querySelector(".city-combo-list");
  const rows = list ? [...list.querySelectorAll(".city-combo-card")] : [];
  if (rows.length <= 1) {
    showToast("至少保留一个起抵城市组合");
    return;
  }
  button.closest(".city-combo-card")?.remove();
}

function fetchAbGroups() {
  const experimentId = document.querySelector("[data-ab-experiment-id]")?.value.trim();
  const groupSelect = document.querySelector("[data-ab-groups]");
  const help = document.querySelector("[data-ab-help]");
  const button = document.querySelector("[data-fetch-ab-groups]");
  if (!experimentId || !groupSelect || !button) {
    showToast("请先输入实验 ID");
    return;
  }

  button.disabled = true;
  button.textContent = "获取中";
  if (help) help.textContent = "正在调用 AB 实验接口获取分组...";

  window.setTimeout(() => {
    groupSelect.innerHTML = `
      <option>B 组</option>
      <option>A 组</option>
      <option>对照组</option>
    `;
    button.disabled = false;
    button.textContent = "获取分组";
    if (help) help.textContent = `已获取实验 ${experimentId} 的分组，可重新输入实验号后再次获取。`;
    showToast("AB 实验分组已获取");
  }, 500);
}

function toChineseCurrency(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 0) return "人民币 零 元整";
  const digits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const units = [
    ["元", "万", "亿", "兆"],
    ["", "拾", "佰", "仟"]
  ];
  const fractionUnits = ["角", "分"];
  const fraction = fractionUnits
    .map((unit, index) => {
      const digit = Math.floor((amount * 10 * Math.pow(10, index)) % 10);
      return digit ? digits[digit] + unit : "";
    })
    .join("") || "整";

  let integer = Math.floor(amount);
  let chinese = "";
  for (let major = 0; integer > 0 && major < units[0].length; major += 1) {
    let section = "";
    for (let minor = 0; minor < units[1].length && integer > 0; minor += 1) {
      const digit = integer % 10;
      section = (digit ? digits[digit] + units[1][minor] : "零") + section;
      integer = Math.floor(integer / 10);
    }
    section = section.replace(/(零)+/g, "零").replace(/零$/g, "");
    if (section) chinese = section + units[0][major] + chinese;
  }
  chinese = chinese || "零元";
  chinese = chinese.replace(/(零)+/g, "零").replace(/零(万|亿|兆)/g, "$1").replace(/零元/g, "元");
  return `人民币 ${chinese.replace(/元$/, "")} 元${fraction}`;
}

function syncDiscountAmount() {
  const amountInput = document.querySelector("[data-discount-input]");
  const confirmInput = document.querySelector("[data-discount-confirm]");
  const chinese = document.querySelector("[data-discount-cn]");
  const status = document.querySelector("[data-discount-status]");
  if (!amountInput || !confirmInput || !chinese || !status) return;

  const amount = Number(amountInput.value);
  const confirmAmount = Number(confirmInput.value);
  chinese.textContent = amountInput.value ? toChineseCurrency(amountInput.value) : "";
  status.classList.remove("error", "success");

  if (!confirmInput.value) {
    status.textContent = amountInput.value ? "请再次输入立减金额进行确认。" : "请输入立减金额并二次确认。";
    return;
  }

  if (Number.isFinite(amount) && Number.isFinite(confirmAmount) && amount.toFixed(2) === confirmAmount.toFixed(2)) {
    status.textContent = "两次输入一致，可以保存。";
    status.classList.add("success");
    return;
  }

  status.textContent = "两次输入金额不一致，请重新确认。";
  status.classList.add("error");
}

function syncCouponConfig() {
  const toggle = document.querySelector("[data-coupon-toggle]");
  const config = document.querySelector("[data-coupon-config]");
  if (!toggle || !config) return;
  config.classList.toggle("hidden", !toggle.checked);
  if (!toggle.checked) {
    config.querySelectorAll("input, textarea, select").forEach((field) => {
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
        return;
      }
      field.value = "";
    });
    syncClaimPrizes();
  }
}

function syncClaimPrizes() {
  const input = document.querySelector("[data-claim-activity-input]");
  const panel = document.querySelector("[data-claim-prizes]");
  const rows = document.querySelector("[data-claim-prize-rows]");
  if (!input || !panel || !rows) return;
  const code = input.value.split("｜")[0].trim();
  const prizes = claimActivityPrizes[code] || [];
  document.querySelectorAll("[data-claim-option]").forEach((option) => {
    option.classList.toggle("selected", option.dataset.value === code);
  });
  panel.classList.toggle("hidden", prizes.length === 0);
  rows.innerHTML = prizes
    .map(
      (item) => `
        <div class="claim-prize-row">
          <span>${item.name}</span>
          <span>${item.type}</span>
          <span>${item.value}</span>
          <span>${item.threshold}</span>
        </div>
      `
    )
    .join("");
}

function resetActivityFormForCreate() {
  const form = document.querySelector("#activityForm");
  if (!form) return;
  form.reset();
  form.querySelectorAll("[data-multi-option].selected").forEach((option) => option.classList.remove("selected"));
  form.querySelectorAll("[data-multi-input]").forEach((input) => {
    input.value = "";
  });
  const groupSelect = document.querySelector("[data-ab-groups]");
  const help = document.querySelector("[data-ab-help]");
  if (groupSelect) groupSelect.innerHTML = '<option value="">请先获取分组</option>';
  if (help) help.textContent = "输入实验号后点击获取分组，后台调用接口返回可配置分组。";
  initializeMultiSelects(form);
  closeAllMultiSelects();
  syncConditionPanels();
  syncQuotaPanels();
  syncDiscountAmount();
  syncCouponConfig();
  syncClaimPrizes();
}

function bindEvents() {
  document.querySelectorAll("[data-page]").forEach((node) => {
    node.addEventListener("click", () => switchPage(node.dataset.page));
  });
  document.querySelector("#createBtn").addEventListener("click", () => {
    resetActivityFormForCreate();
    switchPage("form");
    showToast("已进入新建活动");
  });
  document.querySelector("#searchBtn").addEventListener("click", filterActivities);
  document.querySelector("#resetBtn").addEventListener("click", () => {
    ["#filterKeyword", "#filterOwner"].forEach((selector) => (document.querySelector(selector).value = ""));
    ["#filterStatus", "#filterChannel"].forEach((selector) => (document.querySelector(selector).value = ""));
    renderActivities();
  });
  document.querySelector("#dataSearchBtn").addEventListener("click", filterBenefits);
  document.querySelector("#dataResetBtn").addEventListener("click", () => {
    ["#benefitKeyword", "#userKeyword", "#firstOrderKeyword", "#secondOrderKeyword"].forEach((selector) => {
      document.querySelector(selector).value = "";
    });
    ["#benefitStatusFilter", "#couponStatusFilter"].forEach((selector) => (document.querySelector(selector).value = ""));
    renderBenefits();
  });
  document.querySelector("#activityTable").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "edit" || action === "copy") {
      switchPage("form");
      showToast(action === "edit" ? "已载入活动配置" : "已复制活动配置");
    }
    if (action === "data") {
      switchPage("data");
      showToast("已进入活动数据页");
    }
    if (action === "log") {
      showToast(`正在查看 ${button.dataset.code} 的操作日志`);
    }
  });
  document.querySelector("#benefitTable").addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-benefit]");
    const retryButton = event.target.closest("[data-retry]");
    if (retryButton) {
      showToast("已提交发券重试任务");
      return;
    }
    if (detailButton) openDrawer(detailButton.dataset.benefit);
  });
  document.querySelector("#drawerClose").addEventListener("click", closeDrawer);
  document.querySelector("#drawerMask").addEventListener("click", closeDrawer);
  document.querySelector("#activityForm").addEventListener("submit", (event) => {
    const amountInput = document.querySelector("[data-discount-input]");
    const confirmInput = document.querySelector("[data-discount-confirm]");
    const amount = Number(amountInput?.value);
    const confirmAmount = Number(confirmInput?.value);
    event.preventDefault();
    syncDiscountAmount();
    if (!amountInput?.value || !confirmInput?.value) {
      showToast("请完成立减金额二次确认");
      return;
    }
    if (!Number.isFinite(amount) || !Number.isFinite(confirmAmount) || amount.toFixed(2) !== confirmAmount.toFixed(2)) {
      showToast("立减金额两次输入不一致");
      return;
    }
    showToast("活动已保存，活动 Code 已自动生成");
    switchPage("manage");
  });
  document.querySelectorAll("[data-condition]").forEach((checkbox) => {
    checkbox.addEventListener("change", syncConditionPanels);
  });
  document.querySelectorAll("[data-quota]").forEach((checkbox) => {
    checkbox.addEventListener("change", syncQuotaPanels);
  });
  document.querySelector("#activityForm").addEventListener("focusin", (event) => {
    if (event.target.matches("[data-multi-input]")) {
      openMultiSelect(event.target.closest("[data-multi-select]"));
    }
    if (event.target.matches("[data-claim-activity-input]")) {
      openClaimSelect();
    }
  });
  document.querySelector("#activityForm").addEventListener("input", (event) => {
    if (event.target.matches("[data-multi-input]")) {
      const wrapper = event.target.closest("[data-multi-select]");
      openMultiSelect(wrapper);
      filterMultiSelect(wrapper, event.target.value);
    }
    if (event.target.matches("[data-discount-input], [data-discount-confirm]")) {
      syncDiscountAmount();
    }
    if (event.target.matches("[data-claim-activity-input]")) {
      openClaimSelect();
      filterClaimOptions(event.target.value);
      syncClaimPrizes();
    }
  });
  document.querySelector("#activityForm").addEventListener("change", (event) => {
    if (event.target.matches("[data-coupon-toggle]")) {
      syncCouponConfig();
    }
  });
  document.querySelector("#activityForm").addEventListener("click", (event) => {
    const multiRemove = event.target.closest("[data-multi-remove]");
    const multiOption = event.target.closest("[data-multi-option]");
    const multiSelect = event.target.closest("[data-multi-select]");
    const lineTagAdd = event.target.closest("[data-add-line-tag]");
    const lineTagRemove = event.target.closest("[data-remove-line-tag]");
    const cityAdd = event.target.closest("[data-add-city-combo]");
    const cityRemove = event.target.closest("[data-remove-city-combo]");
    const abGroupFetch = event.target.closest("[data-fetch-ab-groups]");
    const claimOption = event.target.closest("[data-claim-option]");
    if (claimOption) {
      selectClaimActivity(claimOption);
      return;
    }
    if (multiRemove) {
      const wrapper = multiRemove.closest("[data-multi-select]");
      wrapper?.querySelector(`[data-multi-option][data-value="${multiRemove.dataset.value}"]`)?.classList.remove("selected");
      if (wrapper) renderMultiSelect(wrapper);
      return;
    }
    if (multiOption) {
      multiOption.classList.toggle("selected");
      const wrapper = multiOption.closest("[data-multi-select]");
      if (wrapper) {
        renderMultiSelect(wrapper);
        openMultiSelect(wrapper);
      }
      return;
    }
    if (multiSelect) {
      openMultiSelect(multiSelect);
    }
    if (lineTagAdd) addLineTagRule();
    if (lineTagRemove) removeLineTagRule(lineTagRemove);
    if (cityAdd) addCityCombo();
    if (cityRemove) removeCityCombo(cityRemove);
    if (abGroupFetch) fetchAbGroups();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-multi-select]")) {
      closeAllMultiSelects();
    }
    if (!event.target.closest("[data-claim-select]")) {
      closeClaimSelect();
    }
  });
  document.querySelector("#refreshBtn").addEventListener("click", () => showToast("数据已刷新"));
}

renderActivities();
renderBenefits();
bindEvents();
syncConditionPanels();
syncQuotaPanels();
refreshLineTagRules();
initializeMultiSelects();
syncDiscountAmount();
syncCouponConfig();
syncClaimPrizes();
