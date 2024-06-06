import { Input, Dropdown } from "..";
import { shipMethods, stateAbbrev } from "../../_utils/constants";
import { SafeUser } from "../../_types";
import { Dispatch, SetStateAction } from "react";

type CheckoutAddressProps = {
  formik: any;
  shipState: string;
  setShipState: Dispatch<SetStateAction<string>>;
  shipMethod: string;
  setShippingMethod: (s: string) => void;
  user: SafeUser | null;
};

export default function CheckoutAddressForm(props: CheckoutAddressProps) {
  const {
    formik,
    shipState,
    setShipState,
    shipMethod,
    setShippingMethod,
    user,
  } = props;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2 items-center py-6">
        <span className="flex flex-row w-5/6 gap-10 px-2">
          <Input
            width="1/2"
            label="First Name"
            onChange={formik.handleChange("firstName")}
            onBlur={formik.handleBlur("firstName")}
            value={formik.values.firstName}
            error={formik.touched.firstName && formik.errors.firstName}
          />
          <Input
            width="1/2"
            label="Last Name"
            onChange={formik.handleChange("lastName")}
            onBlur={formik.handleBlur("lastName")}
            value={formik.values.lastName}
            error={formik.touched.lastName && formik.errors.lastName}
          />
        </span>
        <span className="flex flex-col w-5/6 gap-2 px-2">
          <Input
            width="full"
            label="Address"
            placeholder="Street address or P.O. Box"
            onChange={formik.handleChange("addressOne")}
            onBlur={formik.handleBlur("addressOne")}
            value={formik.values.addressOne}
            error={formik.touched.addressOne && formik.errors.addressOne}
          />
          <Input
            width="full"
            label="Address Line Two"
            placeholder="Apt, suite, unit, building, floor, etc."
            onChange={formik.handleChange("addressTwo")}
            value={formik.values.addressTwo}
          />
        </span>
        <span className="flex flex-row w-5/6 px-2 justify-between">
          <Input
            width="1/3"
            label="City"
            onChange={formik.handleChange("addressCity")}
            onBlur={formik.handleBlur("addressCity")}
            value={formik.values.addressCity}
            error={formik.touched.addressCity && formik.errors.addressCity}
          />
          <Dropdown
            title="State"
            options={stateAbbrev.map((s) => ({
              title: s,
              setter: () => {
                setShipState(s);
                formik.setFieldValue("addressState", s);
              },
            }))}
            error={formik.touched.addressState && formik.errors.addressState}
            value={shipState}
          />
          <Input
            width="1/3"
            label="Zip Code"
            onChange={formik.handleChange("addressPostal")}
            onBlur={formik.handleBlur("addressPostal")}
            value={formik.values.addressPostal}
            error={formik.touched.addressPostal && formik.errors.addressPostal}
          />
        </span>
        <span className="flex flex-row w-5/6 px-2 justify-between">
          <Dropdown
            title="Shipping Method"
            options={shipMethods.map((s) => ({
              title: s,
              setter: () => {
                setShippingMethod(s);
              },
            }))}
            error={formik.touched.shipMethod && formik.errors.shipMethod}
            value={shipMethod}
          />
          {!user && (
            <Input
              width="1/2"
              label="Email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
          )}
        </span>
      </div>
    </form>
  );
}
