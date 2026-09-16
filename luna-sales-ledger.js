
const KEY="luna_sales_ledger_v1";
function getLedger(){try{return JSON.parse(localStorage.getItem(KEY))||{pendingRevenue:0,premiumSales:0,generalDownloads:0}}catch(e){return{pendingRevenue:0,premiumSales:0,generalDownloads:0}}}
function saveLedger(x){localStorage.setItem(KEY,JSON.stringify(x));renderLedger()}
function recordGeneralDownload(){const x=getLedger();x.generalDownloads++;saveLedger(x)}
function recordPremiumSale(){const x=getLedger();x.pendingRevenue=Number((x.pendingRevenue+9.99).toFixed(2));x.premiumSales++;saveLedger(x)}
function renderLedger(){const x=getLedger();const a=document.querySelector("[data-luna-pending]"),b=document.querySelector("[data-luna-premium-sales]"),c=document.querySelector("[data-luna-general-downloads]");if(a)a.textContent="$"+x.pendingRevenue.toFixed(2);if(b)b.textContent=x.premiumSales;if(c)c.textContent=x.generalDownloads}
document.addEventListener("DOMContentLoaded",renderLedger);
