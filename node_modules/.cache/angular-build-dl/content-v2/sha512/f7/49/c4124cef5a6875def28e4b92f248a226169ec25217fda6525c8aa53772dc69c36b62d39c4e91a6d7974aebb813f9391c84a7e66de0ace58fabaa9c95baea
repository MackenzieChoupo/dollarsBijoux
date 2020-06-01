function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~order-order-module"], {
  /***/
  "./src/providers/coupon/coupon.service.ts":
  /*!************************************************!*\
    !*** ./src/providers/coupon/coupon.service.ts ***!
    \************************************************/

  /*! exports provided: CouponService */

  /***/
  function srcProvidersCouponCouponServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponService", function () {
      return CouponService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var CouponService = /*#__PURE__*/function () {
      function CouponService(shared) {
        _classCallCheck(this, CouponService);

        this.shared = shared; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All below services are used for coupon >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //========================================================================================================
        //=============================== service to calculate line items total ==============================

        this.lineItemTotalService = function (lineItems) {
          var total = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = lineItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var value = _step.value;
              // console.log(value);
              var subtotal = parseFloat(value.total);
              total = total + subtotal;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return total;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkOnSaleService = function (lineItems, coupon) {
          if (coupon.exclude_sale_items == false) return false;
          var found = false;
          lineItems.some(function (value, index) {
            if (value.on_sale == true) found = true;
          });
          if (found && coupon.discount_type == 'fixed_cart') return true;else if (found && coupon.discount_type == 'percent') return true;else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.emailCheckService = function (emailList) {
          if (emailList.length == 0) return false;
          var found = false;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = emailList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var value = _step2.value;

              if (value == this.shared.customerData.email) {
                found = true;
                return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return found;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkCategoriesService = function (value, coupon) {
          // console.log(value);
          // console.log(coupon.product_categories);
          if (coupon.product_categories.length == 0 && coupon.excluded_product_categories.length == 0) return true;
          var found = 0;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = coupon.product_categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var y = _step3.value;
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = value.categories[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var z = _step5.value;
                  console.log("product_categories x = " + z.id + " y=" + y);

                  if (z.id == y) {
                    found++;
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (coupon.product_categories.length == 0) {
            found++;
          }

          var found2 = 0; //for excluded categries

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = coupon.excluded_product_categories[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _y = _step4.value;
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = value.categories[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var _z = _step6.value;
                  console.log("excluded_product_categories x = " + _z.id + " y=" + _y);

                  if (_z.id == _y) {
                    found2++;
                  }
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
            } //  console.log('found ' + found + ' found2 ' + found2);

          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          if (found != 0 && found2 == 0) return true;else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.couponApplyOnProductService = function (value, coupon) {
          if (coupon.product_ids.length == 0 && coupon.excluded_product_ids.length == 0) return true;
          var id = value.product_id;
          var found = 0; //checking in allowed products

          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = coupon.product_ids[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _value = _step7.value;

              //  console.log("id = " + id + "vid" + vId + " value =" + value);
              if (id == _value) {
                found++;
                return true;
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          if (coupon.product_ids.length == 0) {
            found++;
          }

          var found2 = 0; //checking in excluded products

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = coupon.excluded_product_ids[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _value2 = _step8.value;

              if (id == _value2) {
                found2++;
                return true;
              }
            } // console.log('found ' + found + ' found2 ' + found2);

          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          if (found != 0 && found2 == 0) {
            return true;
          } else return false;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkAlreadyAppliedService = function (coupon, couponLines) {
          if (couponLines.length == 0) return false;
          var found = false;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = couponLines[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var value = _step9.value;
              if (value.code == coupon.code) found = true;
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          return found;
        }; //========================================================================================================
        //=============================== service to calculate line items total ==============================


        this.checkUserUsageService = function (coupon) {
          if (coupon.used_by.length == 0) return false;
          if (coupon.usage_limit == null && coupon.usage_limit_per_user == null) return false;

          if (coupon.usage_limit == null) {} else if (coupon.usage_count >= coupon.usage_limit) return true; //console.log($rootScope.customerData);


          var id = this.shared.customerData.customers_email_address;
          if (this.shared.customerData != null) var id2 = this.shared.customerData.customers_id;
          var count = 0;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = coupon.used_by[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var value = _step10.value;
              if (value == id || value == id2) count++;
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          if (count >= coupon.usage_limit_per_user) return true;else return false;
        }; //========================================================================================================
        //=============================== service to check ==============================


        this.checkNoItemInCartService = function (lineItems, coupon) {
          var productIds = coupon.product_ids;
          var ExProductIds = coupon.excluded_product_ids;
          var pCategory = coupon.product_categories;
          var ExPCategory = coupon.excluded_product_categories;
          if (productIds.length == 0 && ExProductIds.length == 0 && pCategory.length == 0 && ExPCategory.length == 0) return true; // var pFound = 0;
          // var ExPfound = 0;

          var result = false; //checking in products ids

          if (productIds.length != 0) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = lineItems[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var x = _step11.value;
                //upper loop
                var id = x.product_id;
                var vId = -1;
                if (x.variation_id != undefined) vId = x.variation_id;
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                  for (var _iterator12 = productIds[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var y = _step12.value;

                    //lower loop 
                    if (id == y || vId == y) {
                      result = true;
                    }
                  }
                } catch (err) {
                  _didIteratorError12 = true;
                  _iteratorError12 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                      _iterator12.return();
                    }
                  } finally {
                    if (_didIteratorError12) {
                      throw _iteratorError12;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          } else {
            result = true;
          } //checking in excluded products ids


          if (ExProductIds.length != 0) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = lineItems[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _x = _step13.value;
                //upper loop  
                var _id = _x.product_id;

                var _vId = -1;

                if (_x.variation_id != undefined) _vId = _x.variation_id;
                var _iteratorNormalCompletion14 = true;
                var _didIteratorError14 = false;
                var _iteratorError14 = undefined;

                try {
                  for (var _iterator14 = ExProductIds[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var _y2 = _step14.value;

                    //lower loop  
                    if (_id == _y2 || _vId == _y2) {
                      result = false;
                    }
                  }
                } catch (err) {
                  _didIteratorError14 = true;
                  _iteratorError14 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                      _iterator14.return();
                    }
                  } finally {
                    if (_didIteratorError14) {
                      throw _iteratorError14;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }
          }

          var result2 = false; //checking in products categories

          if (pCategory.length != 0) {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = lineItems[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var w = _step15.value;
                //upper loop 
                var _iteratorNormalCompletion16 = true;
                var _didIteratorError16 = false;
                var _iteratorError16 = undefined;

                try {
                  for (var _iterator16 = w.categories[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var _x2 = _step16.value;
                    //midddle loop 
                    var _iteratorNormalCompletion17 = true;
                    var _didIteratorError17 = false;
                    var _iteratorError17 = undefined;

                    try {
                      for (var _iterator17 = pCategory[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                        var _y3 = _step17.value;

                        //lower loop 
                        // console.log("x " + x.id + " y " + y);
                        if (_x2.id == _y3) {
                          result2 = true;
                        }
                      }
                    } catch (err) {
                      _didIteratorError17 = true;
                      _iteratorError17 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                          _iterator17.return();
                        }
                      } finally {
                        if (_didIteratorError17) {
                          throw _iteratorError17;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError16 = true;
                  _iteratorError16 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                      _iterator16.return();
                    }
                  } finally {
                    if (_didIteratorError16) {
                      throw _iteratorError16;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          } else {
            result2 = true;
          }

          if (ExPCategory.length != 0) {
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
              for (var _iterator18 = lineItems[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                var _w = _step18.value;
                //upper loop 
                var _iteratorNormalCompletion19 = true;
                var _didIteratorError19 = false;
                var _iteratorError19 = undefined;

                try {
                  for (var _iterator19 = _w.categories[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                    var _x3 = _step19.value;
                    //midddle loop 
                    var _iteratorNormalCompletion20 = true;
                    var _didIteratorError20 = false;
                    var _iteratorError20 = undefined;

                    try {
                      for (var _iterator20 = pCategory[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                        var _y4 = _step20.value;

                        //lower loop 
                        // console.log("x " + x.id + " y " + y);
                        if (_x3.id == _y4) {
                          result2 = false;
                        }
                      }
                    } catch (err) {
                      _didIteratorError20 = true;
                      _iteratorError20 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                          _iterator20.return();
                        }
                      } finally {
                        if (_didIteratorError20) {
                          throw _iteratorError20;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError19 = true;
                  _iteratorError19 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                      _iterator19.return();
                    }
                  } finally {
                    if (_didIteratorError19) {
                      throw _iteratorError19;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError18 = true;
              _iteratorError18 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                  _iterator18.return();
                }
              } finally {
                if (_didIteratorError18) {
                  throw _iteratorError18;
                }
              }
            }
          } //console.log("result " + result + " result2 " + result2);


          if (result == true && result2 == true && coupon.discount_type != 'fixed_cart') return true;else if (result == true && result2 == true && coupon.discount_type != 'percent') return true;else if (result == true && result2 == false && coupon.discount_type == 'fixed_product') return true;else if (result == true && result2 == false && coupon.discount_type == 'percent_product') return true;else if (result == false && result2 == true && coupon.discount_type == 'percent_product') return true;else if (result == false && result2 == true && coupon.discount_type == 'fixed_product') return true;else return false;
        }; //========================================================================================================
        //=============================== service to check the validity of coupon  ==============================


        this.validateCouponService = function (coupon, lineItems, couponLines) {
          var expDate = new Date(coupon.date_expires);
          var todayDate = new Date(); //checking coupon expire or not

          if (expDate <= todayDate && coupon.date_expires != null) {
            this.shared.showAlert("Sorry Coupon is Expired");
            return false;
          } // if cart amount is lower than the coupon minimum limit
          else if (this.lineItemTotalService(lineItems) <= coupon.minimum_amount) {
              this.shared.showAlert("Sorry your Cart total is low than coupon min limit!");
              return false;
            } // if cart amount is higher than the coupon minimum limit
            else if (this.lineItemTotalService(lineItems) >= coupon.maximum_amount && coupon.maximum_amount != 0) {
                this.shared.showAlert("Sorry your Cart total is Higher than coupon Max limit!");
                return false;
              } else if (this.emailCheckService(coupon.email_restrictions) == true) {
                this.shared.showAlert("Sorry, this coupon is not valid for this email address!");
                return false;
              } //============================================================== further checking
              else if (this.checkOnSaleService(lineItems, coupon) == true) {
                  this.shared.showAlert("Sorry, this coupon is not valid for sale items.");
                  return false;
                } else if (this.checkAlreadyAppliedService(coupon, couponLines) == true) {
                  this.shared.showAlert("Coupon code already applied!");
                  return false;
                } else if (couponLines != 0 && couponLines[0].individual_use == true) {
                  this.shared.showAlert('Sorry Individual Use Coupon is already applied any other coupon cannot be applied with it !');
                  return false;
                } else if (this.checkUserUsageService(coupon) == true) {
                  this.shared.showAlert('Coupon usage limit has been reached.');
                  return false;
                } else if (this.checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) == false) {
                  this.shared.showAlert('Sorry Coupon Cannot be Applied on these Products!');
                  return false;
                } // else if (checkNoItemInCartService(lineItems, coupon) == false) {
                //   this.shared.showAlert('Sorry, this coupon is not applicable to your cart contents.');
                //   return false;
                // }
                else return true;
        }; //========================================================================================================
        //=============================== service to apply check coupon ==============================


        this.apply = function (coupon, lineItems) {
          var _this = this;

          console.log("apply coupon called");
          var productLimit = coupon.limit_usage_to_x_items; // if (productLimit == 0) productLimit = null;

          var product_qty_flag = 0; //fixed cart applying on line items

          if (coupon.discount_type == 'fixed_cart') {
            var cartTotal = parseFloat(this.lineItemTotalService(lineItems));
            var discount = parseFloat((coupon.amount / cartTotal).toString()); //console.log("discount  " + discount + "   cartTotal  " + cartTotal);

            lineItems.forEach(function (value, index) {
              if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                var result = value.total - parseFloat((discount * value.total).toString());
                if (result < 0) result = 0;
                value.total = result; // console.log("insdir coupe== " + value.total);
                // console.log(lineItems);
              }
            }); //console.log('fixed_cart'); //console.log(lineItems);

            return lineItems;
          } //percent cart applying on line items
          else if (coupon.discount_type == 'percent_old') {
              lineItems.forEach(function (value, index) {
                var amount = parseFloat(coupon.amount);
                var subtotal = parseFloat(value.subtotal);
                var total = parseFloat(value.total);
                var discount = subtotal / 100 * amount;
                value.total = parseFloat((total - discount).toString());
                if (value.total < 0) value.total = 0;
              }); // console.log('percent'); console.log(lineItems);

              return lineItems;
            } //fixed product applying on specific line items
            else if (coupon.discount_type == 'fixed_product') {
                var amount = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                  if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                    var quantity = value.quantity;
                    var total = parseFloat(value.total);

                    if (productLimit > 0) {
                      for (var l = 1; l <= quantity; l++) {
                        if (product_qty_flag < productLimit) {
                          total = parseFloat((total - amount).toString());
                          product_qty_flag = product_qty_flag + 1;
                        }
                      }

                      value.total = total;
                    } else {
                      value.total = parseFloat((total - amount * quantity).toString());
                    }

                    if (value.total < 0) {
                      value.total = 0;
                    }
                  }
                }); // console.log('fixed_product');

                return lineItems;
              } //percent product applying on specific line items
              else if (coupon.discount_type == 'percent') {
                  var _amount = parseFloat(coupon.amount);

                  lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                      var total = parseFloat(value.total);

                      if (productLimit > 0) {
                        for (var l = 1; l <= value.quantity; l++) {
                          var discount = parseFloat((value.price / 100 * _amount).toString());

                          if (product_qty_flag < productLimit) {
                            total = parseFloat((total - discount).toString());
                            product_qty_flag = product_qty_flag + 1;
                          }
                        }

                        value.total = total;
                      } else {
                        value.total = parseFloat((total - total / 100 * _amount).toString());
                      }

                      if (value.total < 0) value.total = 0;
                    }
                  }); //console.log('percent_product');

                  return lineItems;
                } // else return lineItems;

        };
      } //========================================================================================================
      //=============================== service to check coupon will apply on cart or not  ==============================


      _createClass(CouponService, [{
        key: "checkCouponApplyOrNotOnCurrentProducts",
        value: function checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) {
          console.log(coupon.product_categories.length);
          var found = 0;

          if (coupon.product_categories.length == 0) {
            found++;
          }

          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = coupon.product_categories[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var y = _step21.value;
              var _iteratorNormalCompletion23 = true;
              var _didIteratorError23 = false;
              var _iteratorError23 = undefined;

              try {
                for (var _iterator23 = lineItems.categories[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                  var z = _step23.value;
                  console.log("product_categories x = " + z.id + " y=" + y);

                  if (z.id == y) {
                    found++;
                  }
                }
              } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                    _iterator23.return();
                  }
                } finally {
                  if (_didIteratorError23) {
                    throw _iteratorError23;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }

          var found2 = 0; //for excluded categries

          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = coupon.excluded_product_categories[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _y5 = _step22.value;
              var _iteratorNormalCompletion24 = true;
              var _didIteratorError24 = false;
              var _iteratorError24 = undefined;

              try {
                for (var _iterator24 = lineItems.categories[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                  var _z2 = _step24.value;
                  console.log("excluded_product_categories x = " + _z2.id + " y=" + _y5);

                  if (_z2.id == _y5) {
                    found2++;
                  }
                }
              } catch (err) {
                _didIteratorError24 = true;
                _iteratorError24 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                    _iterator24.return();
                  }
                } finally {
                  if (_didIteratorError24) {
                    throw _iteratorError24;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          if (found2 != 0) return false;else if (found == 0) return false;else return true;
        }
      }]);

      return CouponService;
    }();

    CouponService.ctorParameters = function () {
      return [{
        type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }];
    };

    CouponService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])], CouponService);
    /***/
  }
}]);
//# sourceMappingURL=default~cart-cart-module~order-order-module-es5.js.map