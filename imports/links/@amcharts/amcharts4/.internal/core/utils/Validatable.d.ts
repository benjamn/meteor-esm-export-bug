/**
 * This module defines a [[Validatable]] class which can be used by all
 * non-[[Sprite]] classes to use system beats to revalidate themselves.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { BaseObjectEvents } from "../Base";
/**
 * This module defines a [[Validatable]] class which can be used by all
 * non-[[Sprite]] classes to use system update cycle to revalidate themselves.
 *
 * @ignore Exclude from docs
 */
export declare class Validatable extends BaseObjectEvents {
    /**
     * Is invalid and should be revalidated?
     *
     * @type {boolean}
     */
    protected _invalid: boolean;
    /**
     * Invalidates the element, so that it can re-validate/redraw itself in the
     * next cycle.
     *
     * @ignore Exclude from docs
     */
    invalidate(): void;
    /**
     * Validates itself.
     *
     * Most probably the extending class will have an overriding `validate()`
     * method which will do actual work, as well as call this method using
     * `super.validate()`.
     *
     * @ignore Exclude from docs
     */
    validate(): void;
}
