# PRS Design — Sample Data Reference

Dummy data used across the `Prs.Design` static HTML pages, derived from the real
seed data in `Prs.Api/Database/populate-prs.sql` (Vendors, Products, Users) plus
invented Requests/RequestLines (the seed script does not pre-populate transactional
data — requests are created through normal app use).

Signed-in user shown in the header/nav on every page: **Hope Hodkiewicz** (Reviewer + Admin).

---

## signin.html

Standalone page, no header/nav. Fields: Username, Password, "Forgot It?" link, Sign in button.
No sample data needed — fields render empty.

---

## requests.html

Status filter dropdown: All | New | Review | Approved | Rejected.
Table columns: # | Description (+ Justification below) | Status badge | Total | Requested By (+ Delivery Mode below) | actions (Review / Edit / Delete).

| # | Description | Justification | Status | Total | Requested By | Delivery Mode |
|---|---|---|---|---|---|---|
| 101 | Replace office chairs | Current chairs are broken and unsafe | NEW | $245.00 | Torrey Schoen | Delivery |
| 102 | New laptop for design team | Existing laptop fails hardware diagnostics | REVIEW | $463.93 | Hope Hodkiewicz | Pickup |
| 103 | Break room coffee supplies | Team ran out of coffee and filters | APPROVED | $42.00 | Alexandre Anderson | Delivery |
| 104 | Replacement monitor | Monitor flickers during video calls | REJECTED | $189.00 | Lyda Rolfson | Signature Delivery |
| 105 | Warehouse safety gloves | OSHA compliance for new hires | NEW | $76.00 | May Stracke | Pickup |
| 106 | Conference room whiteboard | Whiteboard cracked beyond use | REVIEW | $309.34 | Melisa King-O'Kon | Delivery |
| 107 | Shipping boxes | Restock packaging for outgoing orders | APPROVED | $95.00 | Myrtis Ferry-Turcotte | Pickup |
| 108 | Ergonomic keyboard | RSI accommodation request | NEW | $93.39 | Randal Boyer | Signature Delivery |

Status badge colors: NEW = primary (blue), REVIEW = warning (yellow), APPROVED = success (green), REJECTED = danger (red).

Delete confirm modal text: "Are you sure you want to delete this request?"

---

## request-create.html

Blank form. Description, Justification, Delivery Method (select), Status (select, disabled,
defaults to New), Requested By (select, always disabled, defaults to the signed-in user).

Requested By dropdown options (subset of Users list): Torrey Schoen, Hope Hodkiewicz (selected),
Alexandre Anderson, Lyda Rolfson, May Stracke, Melisa King-O'Kon, Myrtis Ferry-Turcotte, Randal Boyer.

---

## request-edit.html

Pre-populated for Request #106 (Conference room whiteboard):

| Field | Value |
|---|---|
| Description | Conference room whiteboard |
| Justification | Whiteboard cracked beyond use |
| Delivery Method | Delivery |
| Status | Review (select enabled on Edit) |
| Requested By | Melisa King-O'Kon (disabled) |

---

## request-detail.html

Shows Request #106 (Conference room whiteboard), status REVIEW, owned by Melisa King-O'Kon
(not the signed-in user, so Approve/Reject buttons are enabled).

**Summary:**

| Description | Delivery Method | Requested By |
|---|---|---|
| Conference room whiteboard | Delivery | Melisa King-O'Kon |

| Justification | Status |
|---|---|
| Whiteboard cracked beyond use | REVIEW (badge) |

**Items table:**

| Product | Price | Quantity | Amount |
|---|---|---|---|
| Elegant Steel Shirt | $95.89 | 2 | $191.78 |
| Tasty Aluminum Tuna | $29.39 | 4 | $117.56 |

Footer total: **$309.34**

**Reject modal:** title "Reject", required textarea labeled "Rejection Reason", Cancel + Save buttons.
**Delete line item modal:** "Are you sure you want to delete this line item?"

---

## requestline-create.html

Empty/default state (matches `requests-detail-requestline-create.png`):
Product = "Select..." (unselected), Price = $0.00, Quantity = 0, Amount = $0.00.

Product dropdown options (subset of Products list): Oriental Silk Keyboard, Electronic Steel Pants,
Luxurious Metal Gloves, Frozen Ceramic Hat, Refined Ceramic Chips, Elegant Steel Shirt,
Tasty Aluminum Tuna, Modern Granite Soap.

---

## requestline-edit.html

Editing the "Elegant Steel Shirt" line from Request #106:
Product = Elegant Steel Shirt (selected), Price = $95.89, Quantity = 2, Amount = $191.78.

---

## products.html

Card grid. Each card shows: Part Number (badge), Name, Price /unit, Vendor name.

| Part Number | Name | Price | Unit | Vendor |
|---|---|---|---|---|
| 978-0-632-08712-9 | Oriental Silk Keyboard | $41.09 | Each | Kuhn, Swaniawski and Wolf |
| 978-1-136-36203-3 | Electronic Steel Pants | $93.39 | Pair | Mayer and Sons |
| 978-1-317-46549-2 | Oriental Concrete Bike | $13.29 | Dozen | Spencer, Gleichner and Muller |
| 978-1-02-613261-6 | Sleek Wooden Computer | $69.49 | Each | Cruickshank, Borer and Hane |
| 978-1-06-844569-9 | Luxurious Plastic Pizza | $61.49 | Box | Funk Group |
| 978-0-8475-7898-6 | Practical Bamboo Soap | $7.85 | Dozen | Schaefer Group |
| 978-1-297-57352-1 | Sleek Wooden Pizza | $57.97 | Each | Gislason Group |
| 978-1-4365-3386-7 | Luxurious Metal Gloves | $71.59 | Box | Hegmann LLC |
| 978-0-593-44830-4 | Gorgeous Aluminum Soap | $46.39 | Pair | Mills Group |
| 978-1-281-55413-0 | Electronic Marble Computer | $55.65 | Dozen | Mohr LLC |
| 978-1-81030-233-1 | Handcrafted Granite Shoes | $57.69 | Pack | Quitzon - Heathcote |
| 978-1-7229-1941-2 | Soft Plastic Shirt | $28.49 | Box | Hermann, Runte and Legros |

Delete confirm modal text: "Are you sure you want to delete this product?"

---

## product-create.html

Blank form. Product Number, Product Name, Price, Unit (defaults to "Each"), Vendor (select).

Vendor dropdown options (subset of Vendors list): Bailey Baumbach and Senger, Feest - Kohler,
Quitzon - Heathcote, Spencer Gleichner and Muller, Weber Group, Graham and Sons, Glover - Kemmer,
Mills Group, Mohr LLC, Mayer and Sons.

---

## product-edit.html

Pre-populated for the first product:

| Field | Value |
|---|---|
| Product Number | 978-0-632-08712-9 |
| Product Name | Oriental Silk Keyboard |
| Price | 41.09 |
| Unit | Each |
| Vendor | Kuhn, Swaniawski and Wolf (selected) |

---

## vendors.html

Card grid. Each card shows: Code (badge) + Name, Address, City/State/Zip, Phone, Email.

| Code | Name | Address | City | State | Zip | Phone | Email |
|---|---|---|---|---|---|---|---|
| BAIL-EY | Bailey, Baumbach and Senger | 3293 State Street | Considinetown | ME | 16819 | (229) 372-9117 | support@BAIL-EY.com |
| FEES-TK | Feest - Kohler | 685 Aspen Close | Evefield | CA | 51746 | (380) 011-1732 | support@FEES-TK.com |
| QUIT-ZO | Quitzon - Heathcote | 673 Carli Springs | Fort Ashleighmouth | MA | 47065 | (977) 504-0034 | support@QUIT-ZO.com |
| SPEN-CE | Spencer, Gleichner and Muller | 85826 W 14th Street | McClureside | AZ | 30329 | (719) 733-2208 | support@SPEN-CE.com |
| BATZ-AN | Batz and Sons | 299 Cemetery Road | Kshlerinville | MN | 82428 | (603) 454-3202 | support@BATZ-AN.com |
| CARR-OL | Carroll, Fay and Batz | 850 The Lane | East Kiley | IN | 27711 | (433) 757-6502 | support@CARR-OL.com |
| WEBE-RG | Weber Group | 38498 Mariam Land | Jensenchester | WI | 38392 | (239) 794-7355 | support@WEBE-RG.com |
| GRAH-AM | Graham and Sons | 4023 State Street | Port Caitlynton | UT | 49923 | (656) 378-4314 | support@GRAH-AM.com |
| GLOV-ER | Glover - Kemmer | 3105 The Square | Heathcoteside | MN | 36400 | (338) 112-2318 | support@GLOV-ER.com |
| MILL-SG | Mills Group | 2993 Becker Circles | Utica | UT | 28720 | (663) 535-4539 | support@MILL-SG.com |
| CHRI-ST | Christiansen - Schmitt | 768 Emilio Shore | New Karianeboro | IN | 51437 | (042) 878-6104 | support@CHRI-ST.com |
| WAEL-CH | Waelchi and Sons | 575 Lowe Canyon | North Johnnie | KS | 30140 | (566) 037-0359 | support@WAEL-CH.com |

Delete confirm modal text: "Are you sure you want to delete this vendor?"

---

## vendor-create.html

Blank form. Vendor Code, Vendor Name, Address, City, State (full 50-state + DC select), Zip, Phone, Email.

---

## vendor-edit.html

Pre-populated for the first vendor:

| Field | Value |
|---|---|
| Vendor Code | BAIL-EY |
| Vendor Name | Bailey, Baumbach and Senger |
| Address | 3293 State Street |
| City | Considinetown |
| State | ME (selected) |
| Zip | 16819 |
| Phone | 2293729117 |
| Email | support@BAIL-EY.com |

---

## users.html

Card grid. Each card shows: avatar circle with initials, Full Name, Role (Admin takes
priority over Reviewer when both are true; otherwise "no role assigned"), Phone.

| Initials | Name | Reviewer | Admin | Role shown | Phone |
|---|---|---|---|---|---|
| TS | Torrey Schoen | No | No | no role assigned | (303) 965-3180 |
| HH | Hope Hodkiewicz | Yes | Yes | Admin | (527) 753-9263 |
| AA | Alexandre Anderson | No | Yes | Admin | (456) 604-5257 |
| LR | Lyda Rolfson | Yes | No | Reviewer | (480) 790-4682 |
| MS | May Stracke | No | Yes | Admin | (607) 217-1612 |
| MK | Melisa King-O'Kon | Yes | No | Reviewer | (561) 881-7435 |
| MF | Myrtis Ferry-Turcotte | No | No | no role assigned | (367) 534-3017 |
| RB | Randal Boyer | Yes | No | Reviewer | (171) 633-1775 |
| HO | Haskell Ondricka | Yes | No | Reviewer | (589) 352-9595 |
| JO | Jayme O'Kon | No | Yes | Admin | (407) 625-8764 |
| BS | Bernadine Schamberger | Yes | Yes | Admin | (843) 274-3703 |
| SS | Santino Satterfield | Yes | No | Reviewer | (357) 531-7170 |

Delete confirm modal text: "Are you sure you want to delete this user?"

---

## user-create.html

Blank form. First Name, Last Name, Email, Phone, Username, Password, Reviewer (checkbox),
Admin (checkbox) — both unchecked by default.

---

## user-edit.html

Pre-populated for Hope Hodkiewicz:

| Field | Value |
|---|---|
| First Name | Hope |
| Last Name | Hodkiewicz |
| Email | hope.hodkiewicz28@example.com |
| Phone | 5277539263 |
| Username | hope.hodkiewicz28 |
| Password | (masked — not displayed in real app) |
| Reviewer | checked |
| Admin | checked |

---

## Shared header (all pages except signin)

Signed-in user: **Hope Hodkiewicz**, initials "HH", dropdown with Settings, Profile action, Sign out.

## Shared nav (all pages except signin)

"Purchase" section label, links: Requests, Products, Vendors, Users.
